import React from "react";
import UseAuthContext from "../Hooks/UseAuthContext";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";
import Hero from "../Components/Hero";

const Home = () => {
  const { user, loading } = UseAuthContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="homeContainer   ">
      <div className="homeWrapper bg-blue-200  ">
        {/* her0 container  */}

        <div className="heroCOntainer">
          <Hero />
        </div>

        {/* her0 container  */}
      </div>
    </div>
  );
};

export default Home;
