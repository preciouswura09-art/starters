import React, { useState } from "react";
import Button from "./components/Button";
import { ArrowRight } from "lucide-react";

const Header = ({ text, setText, setImgBg, imgBg }) => {
  const [mode, setMode]=useState("dark")

  const rotateImage = () => {
    if (imgBg === "Elevation.jpg") {
      setImgBg("elevation2.jpg");
    } else {
      setImgBg("Elevation.jpg");
    }
  };

  const toggleMode = ()=> {
    if (mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }
  
  return (
    <header>
      <h2>
        Vacation <br /> Property{" "}
      </h2>
      <nav>
        <ul>
          <li onClick={() => setText("Come")}>Home</li>
          <li onClick={rotateImage}>About</li>
          <li>Payements</li>
          <li>Comment</li>
        </ul>
      </nav>
      <div className="flex-row">

      <Button cta={text} />
      {/* {mode === "light" && <Button cta={"Light Mode"} onClick={toggleMode}/>}
      {mode !== "light" && <Button cta ={"Dark Mode"} onClick={toggleMode}/>} */}
      {mode === "light" ? <Button cta={"Light Mode"} onClick={toggleMode}/> : <Button cta={"Dark Mode"} onClick={toggleMode}/>}
      </div>
    </header>
  );
};

export default Header;
