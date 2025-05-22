import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Evolution from './components/Evolution';
import Resources from './components/Resources';
import What from './components/What';
import Recap from './components/Recap';
import Blog from './components/Blog';
import BlogGrid from './components/BlogGrid';
import BlogDetail from './components/BlogDetail';
import Success from './components/Success';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Analysis from './components/Analysis';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Evolution />
              <Resources />
              <Recap />
              <What />
              <Blog />
              <BlogGrid />
              <Success />
              <FAQ />
              <Contact />
            </>
          } />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
