import React from "react";
import logo from "@assets/msc-logo.svg";

const Header = () => {
  return (
    <>
      <header className="bg-white overflow-hidden shadow p-5 flex w-full">
        <img src={logo} className="h-[20px]" alt="MSC Logo" />
      </header>
    </>
  );
};

export default Header;
