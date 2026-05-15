import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-2.5 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-300">
      <div className="flex items-center shrink-0" id="nav-logo-container">
        <span className="font-fustat font-bold text-[18px] tracking-tight text-white uppercase" id="navbar-logo">
          Space AI
        </span>
      </div>

      <div className="flex items-center" id="nav-menu-container">
        <ul className="flex items-center gap-10 font-inter font-medium text-[13px] text-white" id="nav-menu-list">
          <li className="cursor-pointer hover:text-white/80 transition-colors" id="nav-item-about">About</li>
          <li className="cursor-pointer hover:text-white/80 transition-colors" id="nav-item-pricing">Pricing</li>
          <li className="cursor-pointer hover:text-white/80 transition-colors" id="nav-item-changelog">Changelog</li>
          <li className="cursor-pointer hover:text-white/80 transition-colors" id="nav-item-contact">Contact</li>
        </ul>
      </div>

      <div className="flex items-center shrink-0" id="nav-auth-buttons">
        <button 
          className="px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-inter font-bold text-[13px] hover:bg-white/20 transition-all shadow-xl"
          id="nav-get-started"
        >
          Get started
        </button>
      </div>
    </nav>
  );
}
