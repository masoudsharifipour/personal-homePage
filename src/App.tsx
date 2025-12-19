import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <About />
      <Experience />
      <Blog />
      <Contact />
    </div>
  );
}