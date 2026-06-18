import React from "react";
import "./Footer.css";
import Button from "./components/Button";
import { Copy } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <p className="link">visitusatvacationproperty@google.com</p>
      <Button cta={"copyright"} />
    </footer>
  );
};

export default Footer;
