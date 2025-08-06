import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroImageCollage from "@/components/HeroImageCollage";
import PerspectiveGrid from "@/components/PerspectiveGrid";
import HorizontalScrollGrid from "@/components/HorizontalScrollGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HeroImageCollage />
        <PerspectiveGrid />
        <HorizontalScrollGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
