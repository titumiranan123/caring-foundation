"use client"
import About from "@/component/About/About";
import Curiculam from "@/component/Curiculam/Curiculam";
import Event from "@/component/Event/Event";
import Exprience from "@/component/Exprience/Exprience";
import Facilites from "@/component/Facilities/Facilites";
import Footer from "@/component/Footer/Footer";
import Gallery from "@/component/Gallery/Gallery";
import Header from "@/component/Header/Header";
import Latestnews from "@/component/Latestnews/Latestnews";
import Navbar from "@/component/Navbar/Navbar";
import Progarm from "@/component/Progarm/Progarm";
import Serviceaward from "@/component/Serviceaward/Serviceaward";
import Testimonial from "@/component/Testimonial/Testimonial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Follow from "@/component/Follow/Follow";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
    AOS.refresh();
  })
  return (
    <main className="">
      <Navbar />
      <Header />
      <About />
      <Facilites />
      <Curiculam />
      <Progarm />
      <Serviceaward />
      <Exprience />
      <Event />
      <Testimonial />
      <Gallery />
      <Follow />
      <Latestnews />

      <Footer />

    </main>
  )
}
