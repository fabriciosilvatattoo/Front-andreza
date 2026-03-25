import React from 'react';
import { UserSearch, MessageSquare, LineChart, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r border-outline-variant/30 flex flex-col py-8 px-4 bg-[#08080F]/80 backdrop-blur-xl shadow-[0_0_15px_rgba(165,51,255,0.05)] z-50">
      <div className="mb-12 px-2">
        <h1 className="font-headline italic text-2xl text-primary">Atelier</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-light">Performance</p>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        <a className="flex items-center gap-3 px-4 py-3 text-primary bg-surface-container shadow-[inset_0_0_10px_rgba(207,150,255,0.1)] rounded-lg transition-all duration-300" href="#">
          <UserSearch className="w-5 h-5" />
          <span className="font-label text-sm tracking-wide">Leads</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50 rounded-lg transition-all duration-300" href="#">
          <MessageSquare className="w-5 h-5" />
          <span className="font-label text-sm tracking-wide">Chat</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50 rounded-lg transition-all duration-300" href="#">
          <LineChart className="w-5 h-5" />
          <span className="font-label text-sm tracking-wide">Analytics</span>
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50 rounded-lg transition-all duration-300" href="#">
          <Settings className="w-5 h-5" />
          <span className="font-label text-sm tracking-wide">Settings</span>
        </a>
      </nav>
      <div className="mt-auto pt-8">
        <button className="w-full py-3 bg-primary text-on-primary rounded-lg font-label font-bold text-xs uppercase tracking-widest hover:scale-95 transition-transform duration-200 neon-glow-primary">
          New Appointment
        </button>
      </div>
    </aside>
  );
}
