// import house from "./assets/Elevation.jpg"

import { CirclePlay } from "lucide-react";
import Button from "./components/Button";


const Hero = ({ text, imgBg }) => {

 
  return (
    <div className="hero">
      <div className="hero-bg">
        <img src={`/${imgBg}`} alt="" />
      </div>

      <div className="overlay"></div>
      <h1>
        DISCOVER YOUR PERFECT <br /> HOLIDAY HOME{" "}
      </h1>
      {/* <img src="/Elevation.jpg" alt="" /> */}
      {/* <img src={house} alt="" /> */}

      <br />
      <p>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi harum,
        non quod <br />
        nemo incidunt laudantium quaerat. Ipsam error adipisci tenetur!
      </p>

      <input type="text" placeholder="enter a comment" />
      <Button cta={"Get Started"} />
    </div>
  );
};

export default Hero;
