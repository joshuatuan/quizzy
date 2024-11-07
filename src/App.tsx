import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "./contexts/QuizContext";

export default function App() {
  const { status, questions } = useQuiz();

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center md:max-w-5xl">
      <Header />
      <Main>
        {status === "selection" && <StartScreen />}
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && questions.length > 0 && (
          <div className="flex flex-grow flex-col">
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </div>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
