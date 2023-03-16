import React from "react";
import CustomFooter from "./footer/CustomFooter";
import CustomNav from "./navbar/CustomNav";

export const Layout=({ site, children }) =>{
  const storage = window.localStorage
  return (
    <>
      <nav>
        <CustomNav />
      </nav>
      {!storage.getItem("Logedin") ? <Loading /> : <main className="mainContent">{children}</main>}
      {site != "Task" ? <CustomFooter /> : ""}
    </>
  );
}


