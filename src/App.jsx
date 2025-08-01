import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<> <Hero /><BlogList /> </> }/>
        
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
      
      
      <Footer />
    </Router>
  );
}

export default App;
