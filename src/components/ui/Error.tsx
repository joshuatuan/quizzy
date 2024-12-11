import BackButton from "./BackButton";

function Error() {
  return (
    <div className="mt-14 flex flex-col items-center gap-10">
      <p className="rounded-full bg-red-400 p-8 text-center text-2xl font-semibold text-white">
        <span>💥</span> There was an error fetching questions.
      </p>
      <BackButton />
    </div>
  );
}

export default Error;
