import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Features from "./Features";
import Features2 from "./Features2";
const App = () => {
  const heroImg = [
    "Elevation.jpg",
    "elevation2.jpg",
    "elevation3.jpg",
    "elevation4.jpg",
  ];
  const [text, setText] = useState("Login");
  const [val, setVal] = useState(1);
  const [imgBg, setImgBg] = useState(heroImg[0]);

  setInterval(() => {
    setVal(val + 1);
  }, 5000);

  useEffect(() => {
    const currImgIndex = heroImg.findIndex((val) => val === imgBg);
    const nextImg =
      currImgIndex === heroImg.length - 1
        ? heroImg[0]
        : heroImg[currImgIndex + 1];
    setImgBg(nextImg);
  }, [val]);

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
