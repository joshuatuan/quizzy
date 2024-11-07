import { useQuiz } from "../contexts/QuizContext";
import StatusBar from "./StatusBar";

function Progress() {
  const { index, userAnswer, points, numQuestions, overallPoints } = useQuiz();

  return (
    <div>
      <StatusBar />
      <header className="text-darkest dark:text-medium mb-16 grid grid-cols-[auto_auto] justify-between gap-5 text-3xl">
        <progress
          max={numQuestions!}
          value={index + Number(userAnswer !== null)} // whenever the user answers, progress +1
        ></progress>
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {overallPoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
