import React from 'react';

export default function LeadsList() {
  return (
    <section className="w-80 border-r border-outline-variant/10 flex flex-col bg-surface-container-low/30 backdrop-blur-sm">
      <div className="p-6">
        <h2 className="font-headline italic text-xl mb-4 text-on-surface">Live Leads</h2>
        <div className="flex gap-2 mb-6">
          <button className="px-3 py-1 bg-surface-container text-primary text-[10px] rounded-full font-label uppercase tracking-tighter">All</button>
          <button className="px-3 py-1 text-on-surface-variant text-[10px] rounded-full font-label uppercase tracking-tighter hover:bg-surface-container transition-colors">Pending</button>
          <button className="px-3 py-1 text-on-surface-variant text-[10px] rounded-full font-label uppercase tracking-tighter hover:bg-surface-container transition-colors">Archived</button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-3">
        {/* Lead Card 1 */}
        <div className="glass-card p-4 rounded-xl border-l-2 border-l-primary shadow-[inset_0_0_15px_rgba(207,150,255,0.05)] cursor-pointer">
          <div className="flex items-start gap-3">
            <div className="relative">
              <img 
                className="h-10 w-10 rounded-lg object-cover" 
                alt="Sienna Montgomery" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkFXuFob9BVeHQihxrMBRVKgZvZGKOWNBQeBzMHoBXHG_pf14aRSv3aC_Nd7DOnKCvXy7Ws8PUZjQK5arB_xrXqV5xPCByESJspT6clufdqoZI5-MUa8ApdOajuPZVbiKfne6urqbHNU0CGjm_PWyf0Rgh5NMuzV_2i0pIBwTG0KltZk_7xB1gXzlEV2fmFhILvMfE8gkCig_GblR5D8FpeVx25krlKSPqEszT0L4ogZ7d5UqTFKOSe5pJ6MHdRI2I8biBtZRPE90" 
              />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-[#00FF00] border-2 border-surface rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-semibold truncate text-on-surface">Sienna Montgomery</h4>
                <span className="text-[10px] text-tertiary font-label font-bold status-glow-hot px-1.5 py-0.5 rounded bg-tertiary/10">HOT</span>
              </div>
              <p className="text-xs text-on-surface-variant truncate mt-1 italic font-headline">"I love the blackwork style..."</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center text-[10px] text-on-surface-variant/60 font-label">
            <span>Sleeve Project</span>
            <span>2m ago</span>
          </div>
        </div>

        {/* Lead Card 2 */}
        <div className="hover:bg-surface-container/40 p-4 rounded-xl transition-all duration-300 cursor-pointer group">
          <div className="flex items-start gap-3">
            <div className="relative">
              <img 
                className="h-10 w-10 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" 
                alt="Julian Thorne" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgBeU7UsjPKheH_FZ43Ryu0F9f9R79G1_n-81H98JaIw4S1nk40f1DWSzak3QmGxKyFuu6zhT5NL8R8ezKnuE5n2WSQ0opofz20mU9ZGkQwUMM2_ZjMEmr9knbgC9UhnLKWg-5Aaz4iUA8AIPTMbnv_nK6yFSmiLplcxqA4CIqVaPNucpRxKqACyLydZiFdGc1avDV-XknA3x30Jj9wqss8XsD3wlshsXZ05IjRZUnpDvggYCUpxBam_HKJYlMGqpl-49S1jLZoro" 
              />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-outline-variant border-2 border-surface rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-semibold truncate text-on-surface">Julian Thorne</h4>
                <span className="text-[10px] text-primary font-label font-bold status-glow-warm px-1.5 py-0.5 rounded bg-primary/10">WARM</span>
              </div>
              <p className="text-xs text-on-surface-variant truncate mt-1">Available for consultation next Tuesday?</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center text-[10px] text-on-surface-variant/40 font-label">
            <span>Fine Line Art</span>
            <span>1h ago</span>
          </div>
        </div>

        {/* Lead Card 3 */}
        <div className="hover:bg-surface-container/40 p-4 rounded-xl transition-all duration-300 cursor-pointer group">
          <div className="flex items-start gap-3">
            <img 
              className="h-10 w-10 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" 
              alt="Elena Vance" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCce3PTy9FNuZwfavG7UqYEqVKAUjGzZiL7xWq2XosT70iVqtUpm4O7krEiRLbD0C5532HW-GFUQTqZd0AFLly5-Pd1SKCfExuR70LD1fO8RgcfigLH5MwADeSjxCvgzE04WLdr9bqC4H-OOEyDs2wQ46tEPUGOH76uvZRDw8N4KX8O9IcyA-X2-rAkwJvyeALL7CNtFdRuwzEREexdlkCaMqAUedDgBlqRK89Qo_4ahwONHN3r6d5GuysRqbXXQFkNvWhYmAHn8Hc" 
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-semibold truncate text-on-surface">Elena Vance</h4>
                <span className="text-[10px] text-on-surface-variant font-label font-bold px-1.5 py-0.5 rounded bg-surface-container-high">COLD</span>
              </div>
              <p className="text-xs text-on-surface-variant truncate mt-1">Sent pricing guide.</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center text-[10px] text-on-surface-variant/40 font-label">
            <span>Cover Up</span>
            <span>5h ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}
