import { ArrowUpRight } from 'lucide-react';
import Header from './Header';

export default function Hero() {
  return (
    <div className="px-3 pt-3 md:px-5 md:pt-5 lg:px-6 lg:pt-6">
      <div className="relative rounded-[2rem] overflow-hidden min-h-[85vh] md:min-h-[720px] flex flex-col justify-end bg-slate-900 shadow-xl overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 bg-slate-900">
          <video 
            src="https://res.cloudinary.com/dm3scoj2q/video/upload/v1780984820/7693469-sd_640_360_25fps_kwxdin.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent hidden md:block"></div>

        <Header />

        {/* Hero Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-16 md:pb-24 w-full flex flex-col md:flex-row md:items-end justify-between gap-12 max-w-[1600px] mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-white max-w-3xl leading-[1.1] tracking-tight antialiased">
            Simplifying Tax <br />
            <span className="italic font-light">& Legal Setup For</span><br />
            Your Business.
          </h1>
          
          <div className="max-w-full md:max-w-[22rem] flex flex-col gap-6 md:gap-8 md:mb-4">
            <p className="text-white/80 text-[15px] leading-[1.6] font-medium">
              We provide expert Income Tax, GST, Accounting, and Business Registration services to keep you compliant and thriving.
            </p>
            <a href="#contact" className="bg-white text-slate-900 hover:bg-slate-100 pr-1.5 pl-6 py-1.5 rounded-full font-semibold text-sm flex items-center justify-between gap-4 w-fit transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl">
              Book a Consultation
              <div className="bg-slate-900 text-white rounded-full p-2.5">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
