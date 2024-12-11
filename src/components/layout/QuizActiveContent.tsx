import Footer from "./Footer";
import NextButton from "../NextButton";
import Progress from "../Progress";
import Question from "../Question";
import Timer from "../Timer";

export default function QuizActiveContent() {
  return (
    <div className="flex flex-grow flex-col">
      <Progress />
      <Question />
      <Footer>
        <Timer />
        <NextButton />
      </Footer>
    </div>
  );
}
