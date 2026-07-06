import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="px-5 md:px-12 lg:px-24 pb-12 md:pb-24 max-w-[1600px] mx-auto" id="contact">
      <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row border border-slate-800">
        {/* Left Info Box */}
        <div className="p-10 lg:p-[60px] lg:w-2/5 text-white flex flex-col justify-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A4EDB]/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span className="text-[9px] font-bold tracking-[0.15em] text-white/90 uppercase">Contact Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.2] tracking-tight mb-3 antialiased">
              Let's Discuss Your <span className="italic text-blue-300">Needs</span>.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-10">
              Get in touch with us for expert consultation on taxation, company registration, accounting, and legal compliance.
            </p>

            <div className="flex flex-col gap-5 text-sm font-medium text-white/90">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-400 mt-0.5 shrink-0" size={20} />
                <p className="leading-relaxed">Vigyan khand 1 gomti nagar<br />near madhuban lawn</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400 shrink-0" size={20} />
                <p>95559 00926</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400 shrink-0" size={20} />
                <p>sstaxconsultancy926@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Box */}
        <div className="bg-white p-8 md:p-10 lg:p-[60px] lg:w-3/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2A4EDB]/20 focus:border-[#2A4EDB] transition-all font-medium text-slate-800 placeholder:text-slate-400" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 00000 00000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2A4EDB]/20 focus:border-[#2A4EDB] transition-all font-medium text-slate-800 placeholder:text-slate-400" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Service Required</label>
              <div className="relative">
                <select id="service" defaultValue="" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2A4EDB]/20 focus:border-[#2A4EDB] transition-all font-medium text-slate-800 appearance-none">
                  <option value="" disabled>Select a service...</option>
                  <option value="income-tax">Income Tax Return</option>
                  <option value="gst">GST Registration / Filing</option>
                  <option value="company-reg">PVT. LTD. & LLP Registration</option>
                  <option value="accounting">Accounting Services</option>
                  <option value="iso">ISO / MSME / FSSAI Certification</option>
                  <option value="other">Other Legal Works</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Message</label>
              <textarea id="message" rows={3} placeholder="How can we help you?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2A4EDB]/20 focus:border-[#2A4EDB] transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none"></textarea>
            </div>

            <button type="button" className="mt-1 bg-[#2A4EDB] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-3 w-full sm:w-fit transition-colors shadow-lg shadow-[#2A4EDB]/20 group">
              Send Message
              <Send size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
