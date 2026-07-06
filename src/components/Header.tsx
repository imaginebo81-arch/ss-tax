import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex items-center justify-between text-white border-b border-white/10">
      <div className="flex items-center gap-3 relative z-50">
         <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16H15.5M12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8H8.5"/></svg>
         </div>
         <div className="flex flex-col justify-center">
            <div className="text-[1.35rem] leading-[1.1] font-bold tracking-tight">S.S. TAX</div>
            <div className="text-[0.45rem] tracking-[0.25em] font-medium text-white/70 mt-[1px]">CONSULTANCY</div>
         </div>
      </div>
      
      <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/90">
         <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
         <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
         <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
         <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
         <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
      </ul>

      <div className="flex items-center gap-4 relative z-50">
        <a href="#contact" className="bg-white text-slate-900 hover:bg-slate-50 px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-white/10 hidden sm:flex items-center">
           Contact Us
        </a>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-white/80 p-1 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center pt-20">
          <ul className="flex flex-col items-center gap-8 text-lg font-medium text-white/90 w-full px-6">
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block w-full text-center">Home</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block w-full text-center">Services</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block w-full text-center">About Us</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block w-full text-center">Case Studies</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block w-full text-center">FAQs</a></li>
            <li className="mt-4 w-full flex justify-center">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-white/10 flex items-center justify-center w-full max-w-xs">
                 Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
