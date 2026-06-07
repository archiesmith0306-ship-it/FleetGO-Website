import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1829] border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('home')}
          >
            <Logo className="h-9 text-white" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0">
            {['services', 'pricing', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="font-oswald uppercase tracking-wider text-sm text-slate-300 hover:text-white hover:bg-white/10 px-5 py-5 transition-all border-r border-white/10 first:border-l"
              >
                {section}
              </button>
            ))}
            <a
              href="tel:3313138474"
              className="font-oswald uppercase tracking-wider flex items-center gap-2 bg-[#c8970d] hover:bg-[#a87b0a] text-white px-6 py-5 transition-all text-sm ml-0"
            >
              <Phone className="w-4 h-4" />
              <span>(331) 313-8474</span>
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:3313138474"
              className="bg-[#c8970d] text-white p-2.5 rounded"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 hover:bg-white/10 rounded transition-colors text-white"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-2">
                {['services', 'pricing', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="font-oswald uppercase tracking-wider flex items-center justify-between w-full text-left text-slate-300 hover:text-white hover:bg-white/10 px-4 py-3.5 text-sm transition-colors border-b border-white/5"
                  >
                    {section}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
                <a
                  href="tel:3313138474"
                  className="font-oswald uppercase tracking-wider flex items-center justify-center gap-2 bg-[#c8970d] text-white px-4 py-4 text-sm mt-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now: (331) 313-8474</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
