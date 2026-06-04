import { motion } from 'motion/react';
import { Phone, ArrowRight, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';
import HeroVideoBackground from './HeroVideoBackground';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center pt-16 overflow-hidden text-white"
    >
      <HeroVideoBackground />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 flex flex-col items-start">
        {/* Experience badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 bg-[#c8970d] rounded-full animate-pulse"></div>
          <span className="font-oswald uppercase tracking-[0.2em] text-[#c8970d] text-sm">
            4+ Years of Proven Excellence
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Logo className="h-28 w-auto text-white drop-shadow-2xl" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-oswald uppercase text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-6 max-w-4xl"
        >
          Keeping Your
          <br />
          <span className="text-[#c8970d]">Fleet Rolling</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-white/80">24/7, Nationwide.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
        >
          Dedicated fleet management, maintenance coordination, ELD compliance,
          and round-the-clock driver support — for trucking businesses of every size.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button
            onClick={scrollToContact}
            className="group font-oswald uppercase tracking-wider bg-[#c8970d] hover:bg-[#a87b0a] text-white px-8 py-4 text-base flex items-center gap-3 transition-all shadow-lg shadow-yellow-900/40"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="tel:3313138474"
            className="group font-oswald uppercase tracking-wider border-2 border-white/40 hover:border-white hover:bg-white/10 text-white px-8 py-4 text-base flex items-center gap-3 transition-all"
          >
            <Phone className="w-5 h-5" />
            (331) 313-8474
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-6 text-sm text-slate-400"
        >
          {[
            { icon: Clock, text: '24/7 Live Support' },
            { icon: MapPin, text: '500+ Service Locations' },
            { icon: Phone, text: 'No Hidden Fees' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-[#c8970d]" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-20 bg-[#c8970d] mt-auto"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-yellow-600">
            {[
              { value: '4+', label: 'Years in Business' },
              { value: '500+', label: 'Service Locations' },
              { value: '24/7', label: 'Live Support' },
              { value: '100%', label: 'Vetted Partners' },
            ].map((stat) => (
              <div key={stat.label} className="py-4 px-6 text-center">
                <div className="font-oswald text-2xl md:text-3xl text-white">{stat.value}</div>
                <div className="text-yellow-100 text-xs uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
