import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { useState } from "react";
import Features from "./Features";
import Features2 from "./Features2";
const App = () => {
  const [text, setText] = useState("Login");
  const [imgBg, setImgBg] = useState("Elevation.jpg");


  return (
    <>
      <Header text={text} setText={setText} setImgBg={setImgBg} imgBg={imgBg} />
      <Hero imgBg={imgBg} />
      <Features2 />
      {/* <Features/> */}
      <Footer />
    </>
  );
};

export default App;
