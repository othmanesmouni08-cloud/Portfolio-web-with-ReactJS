import { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    const menuItems = document.querySelectorAll("#menu li");
    const sections = document.querySelectorAll(".section");
    const dots = document.querySelector(".dots");

    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-section");
        sections.forEach(section => section.classList.remove("active"));
        document.getElementById(targetId).classList.add("active");
      });
    });

    dots.addEventListener("click", () => {
      sections.forEach(section => section.classList.remove("active"));
      document.getElementById("contact").classList.add("active");
    });

    setTimeout(() => {
      sections.forEach(section => section.classList.remove("active"));
      document.getElementById("home").classList.add("active");
    }, 50);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <Experience />
        <Education />
        <About />
        <Contact />
        <Projects />
        <Certificates />
      </main>
      <div className="dots" data-section="contact" title="Contact me">•••</div>
    </>
  );
}
