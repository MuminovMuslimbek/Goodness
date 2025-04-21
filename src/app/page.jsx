import About from "@/components/Sections/About";
import GetInvolvedSection from "@/components/Sections/GetInvolvedSection";
import TitleSection from "@/components/Sections/TitleSection";

export default function Home() {
  return (
    <div className="min-container">
      <TitleSection />
      <About />
      <GetInvolvedSection />
    </div>
  );
}
