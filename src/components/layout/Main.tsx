import { useQuiz } from "../../contexts/QuizContext";
import FinishScreen from "../FinishScreen";
import QuizActiveContent from "./QuizActiveContent";
import StartScreen from "../StartScreen";
import Error from "../ui/Error";
import Loader from "../ui/Loader";

export default function Main() {
  const { status, questions } = useQuiz();

  return (
    <main className="w-full max-w-4xl flex-grow p-10 md:p-0">
      {status === "selection" && <StartScreen />}
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && questions.length > 0 && <QuizActiveContent />}
      {status === "finished" && <FinishScreen />}
    </main>
  );
}
