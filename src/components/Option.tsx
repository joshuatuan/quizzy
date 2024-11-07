import { ReactNode } from "react";
import { useQuiz } from "../contexts/QuizContext";

type OptionProps = {
  option: string;
  correctAnswer: string;
  children: ReactNode;
  key: string;
};

function Option({ option, correctAnswer, children, key }: OptionProps) {
  const { userAnswer, dispatch } = useQuiz();
  const hasAnswered = userAnswer !== null;

  const hover = `${option === userAnswer ? "translate-x-8 disabled:hover:translate-x-8 !text-darkest" : ""}`;
  const hasAnsweredStyle = `${
    option === correctAnswer
      ? "!border-theme !bg-theme"
      : "!border-accent !bg-accent"
  } `;

  const darkMode =
    "dark:!text-light dark:hover:bg-darkest dark:border-dark dark:hover:text-light dark:bg-dark";

  return (
    <button
      className={`w-full cursor-pointer rounded-full border-2 border-gray-300 bg-gray-200 px-9 py-5 text-left text-3xl font-medium text-darkest transition-all duration-300 hover:translate-x-8 hover:bg-transparent disabled:hover:translate-x-0 ${hasAnswered ? hasAnsweredStyle : ""} ${hover} ${darkMode} `}
      key={key}
      disabled={hasAnswered}
      onClick={() => dispatch({ type: "newAnswer", payload: option })}
    >
      {children}
    </button>
  );
}

export default Option;
