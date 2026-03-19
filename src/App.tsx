import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AboutFRC from './pages/AboutFRC';
import AboutTeam from './pages/AboutTeam';
import NotFound from './pages/NotFound';
import JoinUs from './pages/JoinUs';

// Lazy-load Robots page (contains Three.js which is heavy)
const Robots = lazy(() => import('./pages/Robots'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark-bg font-outfit">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="min-h-screen bg-dark-bg flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-neon-purple border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/frc" element={<AboutFRC />} />
              <Route path="/about/team" element={<AboutTeam />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/robots" element={<Robots />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;