"use client";

import HorizontalScroll from "@/components/layout/HorizontalScroll";
import Navigation from "@/components/layout/Navigation";
import CustomCursor from "@/components/layout/CustomCursor";
import LandingSection from "@/components/sections/LandingSection";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import AcademySection from "@/components/sections/AcademySection";
import MerchSection from "@/components/sections/MerchSection";
import MembershipSection from "@/components/sections/MembershipSection";
import ContactsSection from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <HorizontalScroll>
      <Navigation />
      <CustomCursor />
      <LandingSection />
      <AboutSection />
      <EventsSection />
      <AcademySection />
      <MerchSection />
      <MembershipSection />
      <ContactsSection />
    </HorizontalScroll>
  );
}
