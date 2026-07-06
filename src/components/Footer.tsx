export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14 px-6 md:px-12 lg:px-24 rounded-t-[2.5rem] mx-3 md:mx-5 lg:mx-6 flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
           <div className="bg-white/10 p-1.5 rounded-lg opacity-80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16H15.5M12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8H8.5"/></svg>
           </div>
           <div className="flex flex-col justify-center opacity-80">
              <div className="text-[1.35rem] leading-[1.1] font-bold tracking-tight">S.S. TAX</div>
              <div className="text-[0.45rem] tracking-[0.25em] font-medium mt-[1px]">CONSULTANCY</div>
           </div>
        </div>
        <div className="flex flex-col gap-2 text-white/60 text-sm font-medium">
          <p>Prop: Shahil Raj Srivastav (B.COM, L.L.B.)</p>
          <p>Vigyan khand 1 gomti nagar near madhuban lawn</p>
          <p>Phone: 95559 00926 | Email: sstaxconsultancy926@gmail.com</p>
        </div>
      </div>
      <div className="text-white/40 text-xs font-medium md:self-end mt-4 md:mt-0 text-center md:text-right">
        © {new Date().getFullYear()} S.S. Tax Consultancy. All rights reserved.
      </div>
    </footer>
  );
}
