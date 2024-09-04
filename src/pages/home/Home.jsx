import React from "react";
import Header from "../../layout/header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <h1>home</h1>
      <Link to={"/get-started"}>Get started</Link>
      <Link to={"/not-found"}>Not Found</Link>
    </>
  );
};

export default Home;
