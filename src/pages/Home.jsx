import React from 'react';
import HeroSection from '../components/Hero';
import TrustStatsSection from '../components/TrustStatsSection';
import AboutCompanySection from '../components/AboutCompanySection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/ClientTestimonials';
import CTASection from '../components/CTASection';
export const Home =  () =>
{
  return (
    <>
   <HeroSection />
   <TrustStatsSection />
   <AboutCompanySection />
   <ServicesSection />
   <FeaturedProjectsSection />
   <WhyChooseUsSection />
   <TestimonialsSection />
   <CTASection />
   </>
  );
}


