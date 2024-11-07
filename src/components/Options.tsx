import { useMemo } from "react";
import Option from "./Option";
import { decodeHtmlEntities, shuffleOptions } from "../utils/helpers";
import { Question } from "../types";

function Options({ question }: { question: Question }) {
  const options = useMemo(() => {
    const shuffledOptions = shuffleOptions([
      ...question.incorrect_answers,
      question.correct_answer,
    ]);
    return shuffledOptions;
  }, [question]);

  return (
    <div className="mb-14 flex flex-col gap-5 md:mb-14">
      {options.map((option) => (
        <Option
          option={option}
          key={option}
          correctAnswer={question.correct_answer}
        >
          {decodeHtmlEntities(option)}
        </Option>
      ))}
    </div>
  );
}

export default Options;
