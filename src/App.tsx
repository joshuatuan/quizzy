import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center gap-y-11 md:max-w-5xl">
      <Header />
      <Main />
    </div>
  );
}
