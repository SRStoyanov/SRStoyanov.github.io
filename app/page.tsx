import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div id="main-mx-4" className="mx-4">
        <div
          id="content-container"
          className="max-w-4xl flex flex-col justify-center items-center mx-auto"
        >
          <Hero />
          <About />
        </div>
      </div>
      <Footer />
    </main>
  );
}