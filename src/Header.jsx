import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import { Menu } from "lucide-react";

// The useEffect hook in React is a powerful tool for managing side effects in functional components. Side effects include tasks like fetching data, updating the DOM, setting up subscriptions, or cleaning up resources. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount used in class components.import { ArrowRight } from "lucide-react";

// useEffect is a React Hook that lets you synchronize a component with an external system.

const Header = ({ text, setText, setImgBg, imgBg }) => {
  const [mode, setMode] = useState("dark");

  // useEffect(() => {
  //   alert("hello world");
  // }, [mode, text]);

  const rotateImage = () => {
    if (imgBg === "Elevation.jpg") {
      setImgBg("elevation2.jpg");
    } else {
      setImgBg("Elevation.jpg");
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  // xs
  // sm
  // md
  // lg
  // xl
  // 2xl

  return (
    <header className="flex justify-between items-center px-5 py-4">
      <h2 className="text-xl font-bold font-serif">Vacation Property </h2>
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          <li onClick={() => setText("Come")}>Home</li>
          <li onClick={rotateImage}>About</li>
          <li>Payements</li>
          <li>Comment</li>
        </ul>
      </nav>
      <div className="gap-2 hidden md:flex">
        <Button cta={text} variant="secondary" />
        {/* {mode === "light" && <Button cta={"Light Mode"} onClick={toggleMode}/>}
      {mode !== "light" && <Button cta ={"Dark Mode"} onClick={toggleMode}/>} */}
        {mode === "light" ? (
          <Button cta={"Light Mode"} onClick={toggleMode} />
        ) : (
          <Button cta={"Dark Mode"} onClick={toggleMode} />
        )}
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
