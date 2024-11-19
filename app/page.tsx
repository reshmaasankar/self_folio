import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Test from "./components/Test";

export default function Home() {
  return (
      <main className="flex items-center flex-col px-4">
        <Intro/>
        <Aboutme/>
        <Skills/>
        <Experience/>
        <Contact/>
      </main>
      
  );
}
