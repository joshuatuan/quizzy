import { useQuiz } from "../contexts/QuizContext";
import BackButton from "./BackButton";

function StatusBar() {
  const { category, difficulty } = useQuiz();

  type categoryMap = {
    [key: number]: string;
  };

  const categoryMap: categoryMap = {
    21: "🏀 Sports",
    15: "🕹️ Video Games",
    23: "📕 History",
    12: "🎸 Music",
    17: "🧪 Science",
    11: "🍿 Movies",
  };

  return (
    <div className="mb-8 flex items-center justify-between">
      <BackButton />
      <div className="flex items-center gap-2 text-2xl font-medium">
        <p className="dark:bg-dark rounded-full bg-gray-200 px-5 py-3">
          {categoryMap[Number(category)]}
        </p>
        <p className="dark:bg-dark rounded-full bg-gray-200 px-5 py-3 capitalize">
          {difficulty}
        </p>
      </div>
    </div>
  );
}

export default StatusBar;
