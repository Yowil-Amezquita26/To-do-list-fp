import React from "react";
import CustomFooter from "./footer/CustomFooter";
import CustomNav from "./navbar/CustomNav";

export const Layout = ({ site, children }) => {
  const storage = window.localStorage;
  console.log(site);
  return (
    <>
      <nav>
        <CustomNav />
      </nav>
        <main className="mainContent">{children}</main>
      {site != "Task" ? <CustomFooter /> : null}
    </>
  );
};
