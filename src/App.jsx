import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomeBlogSection from "./components/HomeBlogSection";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/scrollToTop";
import ProgramPage from "./pages/ProgramPage";
import Programs from "./components/Programs";
import ContactForm from "./components/ContactForm";
import AllBlogsPage from "./pages/AllBlogsPage";
import FacultyPage from "./pages/FacultyPage";
import FacultyDetailPage from "./pages/FacultyDetailPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header /> 
      <Routes>
        <Route path="/" element={<> <Hero /><HomeBlogSection /> </> }/>
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blog" element={<AllBlogsPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetailPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramPage />} />
      </Routes>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
