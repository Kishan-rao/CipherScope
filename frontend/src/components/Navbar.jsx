import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Shield, Key, Lock, Cpu } from 'lucide-react';
import api from '../services/api';

export default function Navbar() {
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    const ping = async () => {
      try { await api.checkHealth(); setBackendStatus('online'); }
      catch { setBackendStatus('offline'); }
    };
    ping();
    const interval = setInterval(ping, 15000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { to: '/', label: 'Overview', icon: Shield, exact: true },
    { to: '/vigenere', label: 'Vigenère Cipher', icon: Key, badge: 'Classical' },
    { to: '/aes', label: 'AES-128', icon: Cpu, badge: 'Symmetric' },
    { to: '/rsa', label: 'RSA', icon: Lock, badge: 'Asymmetric' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFCF5]/95 backdrop-blur-md border-b border-[#E8DECA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#9A6B3F] flex items-center justify-center shadow-sm group-hover:bg-[#7C5230] transition-colors">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-[#7C5230]">CryptoLab</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#F0E8D9] text-[#6B665B] border border-[#E8DECA] font-mono">CNS</span>
              </div>
              <p className="text-[11px] text-[#6B665B] hidden sm:block">Algorithm Visualizer &amp; Demonstrator</p>
            </div>
          </Link>
          <nav className="flex items-center space-x-1 sm:space-x-2" aria-label="Main navigation">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return <NavLink key={item.to} to={item.to} end={item.exact}
                className={({ isActive }) => `flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-[#F0E8D9] text-[#7C5230] border border-[#E8DECA]' : 'text-[#6B665B] hover:text-[#292820] hover:bg-[#F0E8D9]'}`}>
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
                {item.badge && <span className="hidden xl:inline text-[10px] px-1.5 py-0.5 rounded bg-[#F0E8D9] text-[#6B665B] font-mono">{item.badge}</span>}
              </NavLink>;
            })}
          </nav>
          <div className="flex items-center space-x-3 shrink-0">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#E4EEE4] border border-[#E8DECA] text-xs font-mono text-[#315B3B]">
              <span className={`w-2 h-2 rounded-full ${backendStatus === 'online' ? 'bg-emerald-500' : backendStatus === 'offline' ? 'bg-rose-600' : 'bg-amber-500'} ${backendStatus === 'online' ? 'animate-pulse' : ''}`} />
              <span className="hidden sm:inline">API {backendStatus === 'online' ? 'Online' : backendStatus === 'offline' ? 'Offline' : 'Connecting'}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
