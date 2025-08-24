import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-950">
      <Navbar/>
      <div className="mt-2">
        <HomePage/>
      </div>
    </main>
  );
}
