import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining! / 60);
  const seconds = secondsRemaining! % 60;

  // use effect is here cause as soon as this mounts, the timer will start
  // if it was in the app component, it will run as soon as the app mounts

  useEffect(() => {
    const id = setInterval(() => {
      // setIntervals returns an id
      if (secondsRemaining! > 0) dispatch({ type: "tick" });
      else dispatch({ type: "timeUp" });
    }, 1000);

    return () => clearInterval(id); // we needa close it to stop it from running after unmounting
  }, [dispatch, secondsRemaining]);

  return (
    <div className="dark:border-dark dark:text-medium float-left cursor-default rounded-full border-2 border-gray-300 px-11 py-5 text-3xl dark:bg-transparent">
      {/* adds a zero on ones e,g, 06:09 */}
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
