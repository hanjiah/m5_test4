
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AISection } from './components/AISection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="features" className="py-20 bg-white">
          <Features />
        </section>
        <section id="ai-tool" className="py-20 bg-slate-50">
          <AISection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
