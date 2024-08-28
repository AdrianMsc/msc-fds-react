import React from "react";

import SideNav from "../sidenav/SideNav";

const Drawer = ({ children }) => {
  return (
    <>
      <section>
        <SideNav />

        <section className="p-4 sm:ml-64 grid grid-cols-12 pt-8">
          <h1>Hola mundo</h1>
          {children}
        </section>
      </section>
    </>
  );
};

export default Drawer;
