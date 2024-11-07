export type Question = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Action =
  | { type: "loading"; payload: { category: string; difficulty: string } }
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "newAnswer"; payload: string }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" }
  | { type: "timeUp" };
