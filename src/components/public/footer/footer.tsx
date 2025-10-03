import React from "react";

import FooterTop from "./footer-top";
import FooterBottom from "./footer-bottom";
import Line from "../ui/Line";

export default function Footer() {
  return (
    <footer className="bg-custom-dark px-6 md:px-0 py-8">
      <div className="container mx-auto flex flex-col gap-y-11 relative">
        <FooterTop />
        <Line />
        <FooterBottom />
      </div>
    </footer>
  );
}
