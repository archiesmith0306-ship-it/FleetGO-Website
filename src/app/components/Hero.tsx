import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Logo from './Logo';

export default function Hero({ isDarkMode }: { isDarkMode: boolean }) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-32 pb-20 px-6">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950' : 'bg-gradient-to-b from-blue-50 via-white to-gray-50'} transition-colors duration-300`}></div>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950' : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent'} transition-colors duration-300`}></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">4+ Years of Proven Excellence</span>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <Logo className={`h-32 w-auto drop-shadow-2xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`} />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Fleet Management
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Made Simple
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}
          >
            24/7 dedicated support, preventative maintenance, and complete fleet solutions
            for businesses of all sizes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <button
              onClick={scrollToContact}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToPricing}
              className={`group ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 border-gray-200 hover:border-gray-300 text-gray-900'} border-2 px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 transition-all`}
            >
              View Pricing
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className={`pt-12 flex flex-wrap justify-center gap-8 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Nationwide Coverage</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}