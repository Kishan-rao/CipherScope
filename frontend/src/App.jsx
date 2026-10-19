import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Vigenere from './pages/Vigenere';
import AES from './pages/AES';
import RSA from './pages/RSA';
import { Shield, ExternalLink, Code2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2E8] text-[#292820] font-sans">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vigenere" element={<Vigenere />} />
          <Route path="/aes" element={<AES />} />
          <Route path="/rsa" element={<RSA />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8DECA] bg-[#FFFCF5] py-8 px-4 sm:px-6 lg:px-8 text-xs text-[#6B665B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Shield className="w-4 h-4 text-[#9A6B3F]" />
              <span className="font-bold text-[#292820]">CipherScope</span>
            </div>
            <p className="text-[#6B665B] text-[11px]">
              Built with React, Vite, Tailwind CSS, Python 3, FastAPI, and Pytest.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <Link to="/vigenere" className="hover:text-[#9A6B3F] transition-colors">Vigenère</Link>
            <Link to="/aes" className="hover:text-[#9A6B3F] transition-colors">AES-128</Link>
            <Link to="/rsa" className="hover:text-[#9A6B3F] transition-colors">RSA</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

