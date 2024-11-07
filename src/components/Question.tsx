import { useQuiz } from "../contexts/QuizContext";
import { decodeHtmlEntities } from "../utils/helpers";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4 className="mb-12 text-4xl font-semibold md:mb-10">
        {decodeHtmlEntities(question!.question)}
      </h4>
      <Options question={question!} />
    </div>
  );
}

export default Question;
