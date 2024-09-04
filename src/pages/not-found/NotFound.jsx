import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>not found</h1>
      <Link to={"/get-started"}>Get started</Link>
      <Link to={"/home"}>home</Link>
    </>
  );
}

export default NotFound;
