import React from "react";
import CustomFooter from "./footer/CustomFooter";
import Loading from "./loading/Loading";
import CustomNav from "./navbar/CustomNav";

function Layout({ logedin, site, children }) {
  return (
    <>
      <nav>
        <CustomNav />
      </nav>
      {!logedin ? <Loading /> : <main className="mainContent">{children}</main>}
      {site != "Task" ? <CustomFooter /> : ""}
    </>
  );
}

export default Layout;
