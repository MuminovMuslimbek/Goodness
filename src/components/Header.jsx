import React from "react";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import { SheetDemo } from "./SheetDemo";

function Header() {
  return (
    <header className="bg-[#EA9715] px-3 py-2 md:py-4">
      <div className="flex justify-between items-center custom-container">
        <Image src={Logo} alt="Logo" width={32} height={32} />
        <SheetDemo />
        <ul className="hidden md:flex items-center gap-7">
          {[
            "Home",
            "About",
            "Our Works",
            "Get Involved",
            "News",
            "Contact",
            "Volunteer",
            "Donate Now",
          ].map((item) => (
            <li
              key={item}
              className="text-sm font-medium  text-[#FAFAFA] cursor-pointer hover:text-[#475443] hover:underline"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
