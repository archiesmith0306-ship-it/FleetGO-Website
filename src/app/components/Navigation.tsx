import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen, isDarkMode, setIsDarkMode }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-slate-950/80 border-slate-800/50' : 'bg-white/80 border-gray-200/50'} backdrop-blur-xl border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Logo className={`h-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm font-medium`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm font-medium`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors text-sm font-medium`}
            >
              Contact
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>

            <a
              href="tel:3313138474"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all text-sm font-semibold shadow-lg shadow-blue-600/30"
            >
              <Phone className="w-4 h-4" />
              <span>(331) 313-8474</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} rounded-lg transition-colors`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="md:hidden overflow-hidden"
            >
              <div className={`pt-4 pb-4 space-y-4 ${isDarkMode ? 'border-slate-800' : 'border-gray-200'} border-t mt-4`}>
                <button
                  onClick={() => scrollToSection('services')}
                  className={`block w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2 text-sm font-medium`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className={`block w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2 text-sm font-medium`}
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`block w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2 text-sm font-medium`}
                >
                  Contact
                </button>
                <a
                  href="tel:3313138474"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all text-sm font-semibold w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>(331) 313-8474</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}