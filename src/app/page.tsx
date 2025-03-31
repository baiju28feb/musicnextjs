import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import FeaturedCourses from "@/components/FeaturedCourses"
import AboutUs from "@/components/AboutUs"
import {Testimonials} from "@/components/Testimonials"
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grod-white/[0.02]">  
    <HeroSection/>
    <FeaturedCourses/>
    <AboutUs/>
    <Testimonials/>
    <Instructors/>
    <Footer/>
  </main>
  );
}
