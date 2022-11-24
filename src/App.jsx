import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Colored from "./components/Colored";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* <div className="flex flex-col md:flex-row-reverse">
        <img
          src="\images\mobile\image-transform.jpg"
          alt=""
          className="md:w-1/2"
        />
        <div className="text-center py-16 flex flex-col gap-5 px-8 md:text-start md:justify-center md:px-40 md:w-1/2">
          <h1 className="text-4xl">Transform your brand</h1>
          <p className="text-xl font-bold">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">
            <h2
              className={`uppercase underline underline-offset-0 decoration-Yellow font-bold decoration-4 hover:opacity-90 active:decoration-8`}
            >
              Learn more
            </h2>
          </a>
        </div>
      </div> */}
      <Article
        image="\images\mobile\image-transform.jpg"
        title={"Transform your brand"}
        text={
          "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        }
        color={"decoration-Yellow"}
        row={"-reverse"}
      />
      <Article
        image="\images\mobile\image-stand-out.jpg"
        title={"Stand out to the right audience"}
        text={
          "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.."
        }
        color={"decoration-Soft-red"}
        row={""}
      />
      <div className="flex flex-col md:flex-row md:w-full">
        <Colored
          image="\images\mobile\image-graphic-design.jpg"
          imgDesktop="\images\desktop\image-graphic-design.jpg"
          title={"Graphic design"}
          text={
            "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          }
        />
        <Colored
          image="\images\mobile\image-photography.jpg"
          imgDesktop="\images\desktop\image-photography.jpg"
          title={"Photography"}
          text={
            "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          }
        />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
