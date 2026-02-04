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
import AllBlogsPage from "./pages/AllBlogsPage";
import FacultyPage from "./pages/FacultyPage";
import FacultyDetailPage from "./pages/FacultyDetailPage";
import MissionPage from "./pages/MissionPage";
import GalleryPage from "./pages/GalleryPage";
import RecentGalleryPage from "./pages/RecentGalleryPage";
import AdminGalleryPage from "./pages/AdminGalleryPage";
import ContactPage from "./pages/ContactPage";
import { LanguageProvider } from "./components/LanguageContext";


function App() {
  return (
    <>
      <ScrollToTop />
      <Header /> 
      <Routes>
        <Route path="/" element={<><Hero /><HomeBlogSection /></>} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blog" element={<AllBlogsPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/recent-gallery" element={<RecentGalleryPage />} />
        <Route path="/admin" element={<AdminGalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function WrappedApp() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}
