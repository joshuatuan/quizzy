import { useQuiz } from "../contexts/QuizContext";
import BackButton from "./ui/BackButton";

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
        <p className="rounded-full bg-gray-200 px-5 py-3 dark:bg-dark">
          {categoryMap[Number(category)]}
        </p>
        <p className="rounded-full bg-gray-200 px-5 py-3 capitalize dark:bg-dark">
          {difficulty}
        </p>
      </div>
    </div>
  );
}

export default StatusBar;
