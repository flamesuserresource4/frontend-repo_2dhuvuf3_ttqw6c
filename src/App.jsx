import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f7f7fb] to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  );
}

export default App;
