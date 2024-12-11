import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
import { useQuiz } from "../../contexts/QuizContext";

function BackButton({ children }: { children?: ReactNode }) {
  const { dispatch } = useQuiz();
  return (
    <button
      onClick={() => dispatch({ type: "restart" })}
      className="rounded-full border-2 bg-gray-200 py-2 pl-8 pr-10 transition-all duration-200 hover:border-gray-300 hover:bg-gray-300 dark:border-dark dark:bg-dark dark:hover:border-dark dark:hover:bg-transparent"
    >
      <ChevronLeftIcon height={25} /> {children}
    </button>
  );
}

export default BackButton;
