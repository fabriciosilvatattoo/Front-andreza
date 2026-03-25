import React from 'react';
import { Search, Bell, Moon } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="w-full h-16 border-b border-outline-variant/20 flex justify-between items-center px-8 sticky top-0 z-40 bg-[#08080F]/60 backdrop-blur-md">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            className="w-full bg-surface-container-highest/40 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary/50 placeholder:text-on-surface-variant/50 outline-none text-on-surface" 
            placeholder="Search Atelier..." 
            type="text" 
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
          <Moon className="w-5 h-5" />
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-primary/30">
          <img 
            className="w-full h-full object-cover" 
            alt="User" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzycWWpUldIAQKchXOC7xLJMUytQrAP8tlVe9aOeCExrXZySAIfkLe6WAInxzaNCYxwF0qvPlYKgNzNvfYHFIHGYiHYUQcoB5DwYoMoejvFslpeO_ISoyXdAMDokdRwB91cab9sLSFBveaeZ6eHVrQeaWAv1_OllsViwAiTDnj22Cqt5twsXWyE0u6--hVnaRB1sVS-xYLaIqX9owGlvgC_nmLOZ3bTmpAB-gOJN0rdPfx9vnlKnPfQQnmxPOIn-BmAWtY8ZQCiOI" 
          />
        </div>
      </div>
    </header>
  );
}
