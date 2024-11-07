import { useQuiz } from "../contexts/QuizContext";
import { type ChangeEvent, useState } from "react";
import DropDown from "./DropDown";
import Button from "./Button";

function StartScreen() {
  const { dispatch, highScore } = useQuiz();
  const [category, setCategory] = useState("21");
  const [difficulty, setDifficulty] = useState("easy");

  const startQuiz = () => {
    dispatch({ type: "loading", payload: { category, difficulty } });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-8 text-center text-6xl">Welcome to Quizzy</h2>
      <h3 className="mb-32 text-center text-3xl font-semibold md:mb-28 md:text-4xl">
        Please select your category and difficulty
      </h3>

      <div className="mb-20 flex flex-col items-center justify-center gap-8 rounded-3xl bg-gray-200 px-12 py-16 md:gap-10 dark:bg-dark">
        <DropDown
          label="Category"
          value={category}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setCategory(e.target.value)
          }
        >
          <option value="21">🏀 Sports</option>
          <option value="15">🕹️ Video Games</option>
          <option value="23">📕 History</option>
          <option value="12">🎸 Music</option>
          <option value="17">🧪 Science</option>
          <option value="11">🍿 Movies</option>
        </DropDown>

        <DropDown
          label="Difficulty"
          value={difficulty}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setDifficulty(e.target.value)
          }
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </DropDown>
      </div>

      {highScore > 0 && (
        <p className="mb-14 text-center text-4xl md:mb-20 md:text-3xl">
          <span className="text-6xl">👑</span> HighScore:{" "}
          <span className="font-semibold">
            {highScore} point{`${highScore > 1 ? "s" : ""}`}
          </span>
        </p>
      )}
      <Button onClick={startQuiz}>Let&apos;s start</Button>
    </div>
  );
}

export default StartScreen;
