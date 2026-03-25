import React from 'react';
import { BadgeCheck, History, CalendarPlus, Sparkles, UserCheck, Paperclip, ImagePlus, Wand2, Mic, Send } from 'lucide-react';

export default function ChatArea() {
  return (
    <section className="flex-1 flex flex-col bg-[#08080F]">
      {/* Chat Header */}
      <header className="h-20 border-b border-outline-variant/10 px-8 flex items-center justify-between glass-card">
        <div className="flex items-center gap-4">
          <img 
            className="h-12 w-12 rounded-full border border-primary/40 object-cover" 
            alt="Sienna Montgomery" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoNK1ieCvbAs65nr6vR-JPiGy0atlXWQdaFMJpNWipOgxddilKrwcn3Brv3nSmRH6OqBU_crkfRj-6YwAj9i5uaIhFAMlTk2K4B26Lvtdzf-4Bn1uregH4FYG3DMhLvpzW2nuQYW8Zv_p-EcCHiy5mDysEGVaDMTjIxpt2CmE31Blmnof7_ZAE_9j-bqKGiKHQub1_ugrQc09-nZAfcCaoA0kyNe_yNIhN4HyKwRd7LKJRKbAUnXEhiFlulUbKSuHo2O86uQnx2aE" 
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline italic text-lg text-on-surface">Sienna Montgomery</h3>
              <BadgeCheck className="text-primary w-4 h-4" fill="currentColor" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-tertiary animate-pulse status-glow-hot"></div>
              <span className="text-xs text-on-surface-variant font-label">AI Luna is handling this lead</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-lg text-xs font-label text-on-surface border border-outline-variant/30 hover:bg-surface-bright transition-all">
            <History className="w-4 h-4" />
            Logs
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/40 rounded-lg text-xs font-label text-primary hover:bg-primary/20 transition-all neon-glow-primary">
            <CalendarPlus className="w-4 h-4" />
            Book Session
          </button>
        </div>
      </header>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-12 space-y-8 flex flex-col">
        <div className="text-center">
          <span className="text-[10px] font-label uppercase tracking-[0.4em] text-on-surface-variant/40 bg-surface-container-low px-4 py-1 rounded-full">Conversation Started Today</span>
        </div>

        {/* Lead Message */}
        <div className="flex gap-4 max-w-2xl">
          <img 
            className="h-8 w-8 rounded-lg mt-1 object-cover" 
            alt="Client Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAbx-ZNE_OHly8OR8uJPDTe1ILsJA5o62nM0Kv59a1NZhq5rEWfWmtPLRakORQ4FCIpr8wFVN2AK7_1XeXyn4GKp0pVaJA4LFCFTvK-7W2FuLlGktYkDYXm6BOs_ihClCZTV2y32pYELPcwWX6S7wCKaWZMTV9sYSCBYgvD_hkeIT4kREQCl1R_oZWwc0Bd_M4O7s-8a77bdGuSds7ahhp7lKNdvRVPICn69j-mfqfahnD-s_Kj3-RjmMsvtwpEenslN8Y0kb_r7U" 
          />
          <div className="space-y-2">
            <div className="bg-surface-container-high/60 p-4 rounded-2xl rounded-tl-none border-t border-l border-white/5 text-sm text-on-surface-variant leading-relaxed">
              Hello! I've been following your Atelier Performance work for a while. I'm looking to do a full sleeve in a traditional Japanese style but with a cyberpunk twist—lots of neon purple and deep blacks. Do you have any availability for a consultation?
            </div>
            <span className="text-[10px] text-on-surface-variant/40 font-label ml-2">10:42 AM</span>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex gap-4 max-w-2xl self-end flex-row-reverse">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40 mt-1">
            <Sparkles className="text-primary w-4 h-4" fill="currentColor" />
          </div>
          <div className="space-y-2 text-right">
            <div className="bg-primary/5 p-4 rounded-2xl rounded-tr-none border border-primary/20 text-sm text-primary leading-relaxed shadow-[0_0_20px_rgba(207,150,255,0.05)]">
              <p className="font-headline italic text-xs mb-2 opacity-60">Luna AI Assistant</p>
              That sounds like an incredible project, Sienna! The "Neon Nocturne" aesthetic is exactly what we specialize in. I've checked our master schedule, and we have two slots open for an initial design consultation: Next Wednesday at 2:00 PM or Friday at 10:00 AM. Would either of those work for you?
            </div>
            <span className="text-[10px] text-primary/40 font-label mr-2">10:43 AM · Seen</span>
          </div>
        </div>

        {/* Lead Message */}
        <div className="flex gap-4 max-w-2xl">
          <img 
            className="h-8 w-8 rounded-lg mt-1 object-cover" 
            alt="Client Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0OrE-y4UCgRY1pyIf3ZTz64RW_k1p_pGVVXopPg9YLbjyzw204o6apRbtP5vWh_2SS4AY0d-aJM_7I1Ph3OP_2NAJRIki_IyEWMPRX2KDXps4eX19AOY9XIogdWdbi4Q3p9dBJvSuWNNJyVPGPfpcFjGnkygpS_AUIYvrmDONytyifqbcQUm4aWrLcun7_zEmrIbR6aJTtHuNQNi_eQGI8DBNgv99KBd8GJWTBfyufL2T1hChwRssVLC2dOPGUkPDIeLlIGyi4bo" 
          />
          <div className="space-y-2">
            <div className="bg-surface-container-high/60 p-4 rounded-2xl rounded-tl-none border-t border-l border-white/5 text-sm text-on-surface-variant leading-relaxed">
              Friday at 10:00 AM works perfectly! One more thing, I have a small existing piece on my wrist. Can we integrate that or will we need to cover it? I can send a photo now.
            </div>
            <span className="text-[10px] text-on-surface-variant/40 font-label ml-2">10:45 AM</span>
          </div>
        </div>
      </div>

      {/* Message Input & Controls */}
      <footer className="p-8 border-t border-outline-variant/10 bg-surface-container-lowest/50 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-6">
          <button className="flex items-center gap-3 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            <UserCheck className="w-5 h-5" />
            Assumir Conversa em Tempo Real
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <ImagePlus className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-surface-container-high/40 rounded-2xl p-2 border border-outline-variant/20">
          <button className="p-3 text-tertiary hover:bg-tertiary/10 rounded-xl transition-all group" title="Sussurrar comando para a IA">
            <Wand2 className="w-5 h-5" />
          </button>
          <input 
            className="flex-1 bg-transparent border-none text-on-surface placeholder:text-on-surface-variant/30 text-sm focus:ring-0 outline-none" 
            placeholder="Escreva sua mensagem ou sussurre um comando..." 
            type="text" 
          />
          <div className="flex items-center gap-2">
            <button className="h-10 w-10 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors rounded-xl hover:bg-surface-bright">
              <Mic className="w-5 h-5" />
            </button>
            <button className="h-10 w-10 flex items-center justify-center bg-primary text-on-primary rounded-xl neon-glow-primary hover:scale-105 transition-transform">
              <Send className="w-5 h-5" fill="currentColor" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 justify-center">
          <span className="text-[10px] text-on-surface-variant/30 font-label tracking-widest uppercase">Luna AI Context: Analyzing sentiment... Waiting for image upload.</span>
        </div>
      </footer>
    </section>
  );
}
