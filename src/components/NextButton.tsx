import { useQuiz } from "../contexts/QuizContext";
import Button from "./ui/Button";

function NextButton() {
  const { dispatch, userAnswer, index, numQuestions } = useQuiz();

  if (index < numQuestions! - 1)
    // do not show up on the final question
    return (
      <Button
        onClick={() => dispatch({ type: "nextQuestion" })}
        disabled={userAnswer === null}
        className="disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:bg-gray-200 dark:disabled:hover:border-dark dark:disabled:hover:bg-dark"
      >
        Next
      </Button>
    );
  if (index === numQuestions! - 1) {
    // finish button
    return <Button onClick={() => dispatch({ type: "finish" })}>Finish</Button>;
  }
}

export default NextButton;
