export default function WhoWeAre() {
  const stats = [
    { value: "100%", description: "Commitment to strict compliance and legal accuracy for all our clients." },
    { value: "10+", description: "Years of combined expertise guiding individuals and businesses with tax and legal matters." },
    { value: "500+", description: "Businesses advised across various industries including startups, SMEs, and established enterprises." },
    { value: "24/7", description: "Dedicated support to answer queries and provide end-to-end legal solutions." }
  ];

  return (
    <section className="px-5 md:px-12 lg:px-24 py-20 md:py-32 max-w-[1600px] mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-slate-200/60 mb-6 md:mb-8">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-700"></div>
        <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 uppercase">Who We Are</span>
      </div>

      <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[4rem] font-serif text-slate-800 leading-[1.2] tracking-tight max-w-[1100px] antialiased">
        S.S. TAX CONSULTANCY is a <span className="italic text-[#2A4EDB]">trusted</span> tax and legal consultancy <span className="italic text-[#2A4EDB]">helping</span> clients <span className="italic text-[#2A4EDB]">navigate</span> compliance, <span className="italic text-[#2A4EDB]">manage</span> taxes, and <span className="italic text-[#2A4EDB]">achieve</span> sustainable business growth.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200 hover:shadow-md transition-shadow">
             <div className="text-[3.5rem] md:text-[4rem] font-serif text-slate-800 leading-none mb-4 antialiased">{stat.value}</div>
             <p className="text-slate-500 text-xs md:text-sm leading-relaxed pr-2 font-medium">
               {stat.description}
             </p>
          </div>
        ))}
      </div>
    </section>
  );
}
