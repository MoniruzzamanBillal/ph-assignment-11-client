import React from "react";
import { Outlet } from "react-router-dom";
import AppProvider from "../Context/AuthContext";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <div className="  ">
      {/* layout container  */}

      <AppProvider>
        <div className="navContainer ">
          <NavBar />
        </div>

        <div className="bodyContainer  ">
          <Outlet />
        </div>

        <div className="footerContainer">
          <h1>Footer</h1>
          <h1>Footer</h1>
          <h1>Footer</h1>
          <h1>Footer</h1>
          <h1>Footer</h1>
        </div>
      </AppProvider>

      {/* layout container  */}
    </div>
  );
};

export default MainLayout;
