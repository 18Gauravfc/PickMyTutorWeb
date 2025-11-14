

import React from 'react'
import HeroSection from "./components/homePageComponent/hero-section"
import FeaturesSection from './components/homePageComponent/FeaturesSection'
import StatsSection from './components/homePageComponent/StatsSection'
import TestimonialsSection from './components/homePageComponent/TestimonialsSection'
import CTASection from "./components/homePageComponent/CTASection"




const page = () => {
  return (
    <div>
     <FeaturesSection />
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
       
    </div>
  )
}
export default page
