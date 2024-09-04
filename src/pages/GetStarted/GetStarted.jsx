import React from "react";
import Drawer from "../../layout/drawer/Drawer";
import MscButton from "../../components/msc-button/MscButton";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <Drawer>
      <MscButton />
      <h1>not found</h1>
      <Link to={"/home"}>home</Link>
      <Link to={"/not-found"}>not found</Link>
    </Drawer>
  );
};

export default GetStarted;
