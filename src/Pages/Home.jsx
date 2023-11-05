import React from "react";
import UseAuthContext from "../Hooks/UseAuthContext";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";
import Hero from "../Components/Hero";
import WhatWeOffer from "../Components/WhatWeOffer";
import Testimonial from "../Components/Testimonial";
import WhyChoose from "../Components/WhyChoose";
import TopSelling from "../Components/TopSelling";

const Home = () => {
  const { user, loading } = UseAuthContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="homeContainer   ">
      <div className="homeWrapper dark:bg-gray-700  ">
        {/* her0 container  */}

        <div className="heroCOntainer">
          <Hero />
        </div>

        {/* her0 container  */}

        {/* what we offer section  */}
        <div className="whatWeOffer  ">
          <WhatWeOffer />
        </div>
        {/* what we offer section  */}

        {/* top selling item  */}
        <div className="topSelling">
          <TopSelling />
        </div>
        {/* top selling item  */}

        {/* testimonial container  */}
        <div className="testimonialContainer">
          <Testimonial />
        </div>
        {/* testimonial container  */}

        {/* why choose us section  */}
        <div className="whyChooseUs">
          <WhyChoose />
        </div>
        {/* why choose us section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
