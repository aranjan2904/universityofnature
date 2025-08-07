import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/scrollToTop";
import ProgramPage from "./pages/ProgramPage";
import Programs from "./components/Programs";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header /> 
      <Routes>
        <Route path="/" element={<> <Hero /><BlogList /> </> }/>
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramPage />} />
      </Routes>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
