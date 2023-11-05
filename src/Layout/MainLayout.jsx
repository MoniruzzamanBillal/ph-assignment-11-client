import React from "react";
import { Outlet } from "react-router-dom";
import AppProvider from "../Context/AuthContext";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import UseAuthContext from "../Hooks/UseAuthContext";
import Loading from "../Components/Loading";

const MainLayout = () => {
  const { loadingh } = UseAuthContext();

  if (loadingh) {
    return <Loading />;
  }

  return (
    <div className="  ">
      {/* layout container  */}

      <div className="navContainer ">
        <NavBar />
      </div>

      <div className="bodyContainer  ">
        <Outlet />
      </div>

      <div className="footerContainer">
        <Footer />
      </div>

      {/* layout container  */}
    </div>
  );
};

export default MainLayout;
