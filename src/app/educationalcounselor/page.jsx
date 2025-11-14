"use client";

import React from "react";
import CounselorHero from "./counselor-hero";
import CounselorServices from "./counselor-services";
import CounselorBenefits from "./counselor-benefits";
import CounselorTestimonials from "./counselor-testimonials";
import CounselorForm from "./counselor-form";
import CounselorCTA from "./counselor-cta";

const educationalcounselorRoute = () => {
  return (
    <div>
      <CounselorHero />
      <CounselorServices />
      <CounselorBenefits />
      <CounselorTestimonials />
      <CounselorForm />
      <CounselorCTA />
    </div>
  );
};

export default educationalcounselorRoute;
