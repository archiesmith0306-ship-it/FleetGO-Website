import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Hero from './components/Hero';
import CoverageMap from './components/CoverageMap';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import TrustedPartners from './components/TrustedPartners';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="size-full bg-white text-[#0b1829] overflow-y-auto">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <TrustedPartners />
      <CoverageMap />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Contact />

      {/* Footer */}
      <footer className="bg-[#060e1a] text-slate-400 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-oswald uppercase text-2xl text-white mb-3 tracking-wide">FleetGO</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Your trusted partner in fleet management and logistics — keeping American trucks moving since 2022.
              </p>
              <div className="inline-flex items-center gap-2 border border-[#c8970d]/40 px-3 py-1.5">
                <span className="w-2 h-2 bg-[#c8970d] rounded-full animate-pulse" />
                <span className="font-oswald uppercase tracking-wider text-[#c8970d] text-xs">4+ Years of Excellence</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-oswald uppercase tracking-wider text-white text-sm mb-5">Contact</h4>
              <div className="space-y-4 text-sm">
                <a href="tel:3313138474" className="flex items-center gap-2 text-slate-400 hover:text-[#c8970d] transition-colors">
                  <Phone className="w-4 h-4 text-[#c8970d]" />
                  (331) 313-8474
                </a>
                <a href="mailto:archie.white@myfleetgo.com" className="flex items-start gap-2 text-slate-400 hover:text-[#c8970d] transition-colors break-all">
                  <Mail className="w-4 h-4 text-[#c8970d] flex-shrink-0 mt-0.5" />
                  archie.white@myfleetgo.com
                </a>
                <div className="flex items-start gap-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4 text-[#c8970d] flex-shrink-0 mt-0.5" />
                  <span>1811 W Diehl Road, Suite 200<br />Naperville, IL 60563</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-oswald uppercase tracking-wider text-white text-sm mb-5">Services</h4>
              <ul className="space-y-2.5 text-sm">
                {['Fleet Management', 'Preventative Maintenance', '24/7 Support', 'ELD Compliance', 'Work Order Mgmt', 'Driver Support'].map((s) => (
                  <li key={s}>
                    <span className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer flex items-center gap-2">
                      <span className="text-[#c8970d]">›</span> {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h4 className="font-oswald uppercase tracking-wider text-white text-sm mb-5">Industry Partners</h4>
              <ul className="space-y-2.5 text-sm text-slate-500">
                {['Penske', 'Ryder', 'MHC Kenworth', 'Samsara', 'NationaLease', 'Boss Truck Shops'].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-[#c8970d]">›</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
              &copy; 2026 FleetGO. All rights reserved. Serving the logistics industry since 2022.
            </p>
            <div className="flex gap-6 text-slate-600 text-xs">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
