import React from "react";
import CustomFooter from "../footer/CustomFooter";
import Loading from "../loading/Loading";
import CustomNav from "../navbar/CustomNav";

function Layout({ site, children }) {
  const storage = window.localStorage;
  return (
    <div className="layout">
      <CustomNav />
      {/* {!storage.getItem("Logedin") ? <Loading /> : <main className="mainContent">{children}</main>} */}
      <main className="mainContent">{children}</main>
      {site != "Task" ? <CustomFooter /> : null}
    </div>
  );
}

export default Layout;
