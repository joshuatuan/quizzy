import { useQuiz } from "../contexts/QuizContext";
import Button from "./ui/Button";

function FinishScreen() {
  const { points, overallPoints, dispatch } = useQuiz();
  const percentage = (points / overallPoints!) * 100;

  let emoji;
  if (percentage === 100) emoji = "🙌";
  if (percentage >= 80 && percentage < 100) emoji = "👏";
  if (percentage >= 50 && percentage < 80) emoji = "👌";
  if (percentage >= 0 && percentage < 50) emoji = "👍";
  if (percentage === 0) emoji = "💀";

  return (
    <div className="mt-36 flex flex-col items-center gap-8 md:mt-16">
      <p className="mb-6 rounded-full bg-gray-300 px-6 py-8 text-center text-4xl font-medium md:px-10 dark:bg-dark">
        <span className="text-4xl md:mr-1 md:text-5xl">{emoji} </span>
        You scored{" "}
        <strong>
          {points} out of {overallPoints}
        </strong>
      </p>

      <Button onClick={() => dispatch({ type: "restart" })}>Play again</Button>
    </div>
  );
}

export default FinishScreen;
