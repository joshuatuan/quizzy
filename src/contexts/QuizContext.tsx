import {
  createContext,
  type Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { type Action, type Question } from "../types";

type QuizState = {
  questions: Question[];
  status: "selection" | "loading" | "ready" | "finished" | "error";
  index: number;
  userAnswer: string | null;
  points: number;
  highScore: number;
  secondsRemaining: number | null;
  category: string;
  difficulty: string;
};

type QuizContextValue = QuizState & {
  dispatch: Dispatch<Action>;
  numQuestions: number | null;
  overallPoints: number | null;
};

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

const initialState: QuizState = {
  questions: [],
  status: "selection", // loading, error, active, finished
  index: 0,
  userAnswer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
  category: "",
  difficulty: "",
};

const SECS_PER_QUESTION = 15;

function reducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case "loading": {
      const { category, difficulty } = action.payload;
      return { ...state, status: "loading", category, difficulty };
    }

    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        secondsRemaining: action.payload.length * SECS_PER_QUESTION,
      };

    case "dataFailed":
      return { ...state, status: "error" };

    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        userAnswer: action.payload,
        points:
          action.payload === question!.correct_answer
            ? state.points + 1
            : state.points,
      };
    }

    case "nextQuestion":
      return { ...state, index: state.index + 1, userAnswer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...initialState,
        status: "selection",
        highScore: state.highScore,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining! - 1,
      };

    case "timeUp":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    default:
      throw new Error("Invalid action type");
  }
}

type QuizContextProp = {
  children: ReactNode;
};

function QuizProvider({ children }: QuizContextProp) {
  const [
    {
      questions,
      status,
      index,
      userAnswer,
      points,
      highScore,
      secondsRemaining,
      category,
      difficulty,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const overallPoints = questions.length;
  // const overallPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(
    function () {
      async function fetchQuestions() {
        if (category !== "" && difficulty !== "") {
          try {
            const res = await fetch(
              `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}`,
            );
            if (!res.ok) {
              dispatch({ type: "dataFailed" });
              return;
            }
            const data = await res.json();
            dispatch({ type: "dataReceived", payload: data.results });
            console.log(data.results);
          } catch (error) {
            dispatch({ type: "dataFailed" });
            console.log("Error: ", error);
          }
        }
      }
      fetchQuestions();
    },
    [category, difficulty],
  );

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        userAnswer,
        points,
        highScore,
        secondsRemaining,
        dispatch,
        numQuestions,
        overallPoints,
        category,
        difficulty,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz context used outside quiz provider");
  return context;
}

export { QuizProvider, useQuiz };
