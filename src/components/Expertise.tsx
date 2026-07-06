import { Check, ArrowRight } from 'lucide-react';

export default function Expertise() {
  const services = [
    {
      title: "Tax Returns & Accounting",
      description: "Expert assistance for individuals and businesses to file accurate and timely tax returns, maintain clear accounts, and stay compliant.",
      features: ["Income Tax Return", "Accounting Services", "TDS & Tax Planning"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "GST Compliance",
      description: "Comprehensive Goods and Services Tax support to ensure your business remains fully compliant with the latest regulations.",
      features: ["New GST Registration", "Monthly/Quarterly Returns", "GST Audit & Appeals"],
      image: "https://images.pexels.com/photos/14647295/pexels-photo-14647295.jpeg"
    },
    {
      title: "Company Registration",
      description: "Launch and formalize your business structure securely. We handle the paperwork, making registrations quick and hassle-free.",
      features: ["PVT. LTD. Registration", "LLP Registration", "One Person Company (OPC)"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Shop Act & Licenses",
      description: "Secure the crucial local registrations required to operate your business legally within city limits and adhere to state guidelines.",
      features: ["Shop Act Registration", "Trade License", "Labor Law Compliance"],
      image: "https://images.pexels.com/photos/4489748/pexels-photo-4489748.jpeg"
    },
    {
      title: "ISO Certification",
      description: "Obtain international quality markers to build business credibility and demonstrate your commitment to quality standards.",
      features: ["ISO 9001:2015", "Quality Management", "Audit Assistance"],
      image: "https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg"
    },
    {
      title: "MSME & FSSAI Licenses",
      description: "Secure essential regulatory licenses to access government schemes and operate food or specialized businesses legally.",
      features: ["MSME (Udyam) Registration", "FSSAI Food License", "& Many More Legal Works"],
      image: "https://images.pexels.com/photos/31047162/pexels-photo-31047162.jpeg"
    }
  ];

  return (
    <section className="px-5 md:px-12 lg:px-24 pb-12 md:pb-24 lg:pb-32 max-w-[1600px] mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-slate-200/60 mb-6 md:mb-8">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-700"></div>
        <span className="text-[9px] font-bold tracking-[0.15em] text-slate-500 uppercase">Our Services</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 leading-[1.25] tracking-tight mb-10 md:mb-16 antialiased">
        Our <span className="italic text-[#2A4EDB]">Expertise</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200 flex flex-col hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <div className="h-52 overflow-hidden relative bg-slate-100">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-slate-800 mb-3 antialiased">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                {service.description}
              </p>
              
              <ul className="text-slate-700 text-sm font-medium flex flex-col gap-3 mt-auto mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2.5">
                    <Check className="text-[#2A4EDB] mt-0.5 shrink-0" size={16} strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-50 hover:bg-[#2A4EDB] text-slate-800 hover:text-white rounded-xl border border-slate-900 hover:border-[#2A4EDB] text-sm font-semibold transition-colors duration-300"
              >
                Book Consultation
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
