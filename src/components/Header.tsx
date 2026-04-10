import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Header() {
  const { lang, setLang, theme, setTheme, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.islands, href: '#islands' },
    { label: t.nav.culture, href: '#culture' },
    { label: t.nav.history, href: '#history' },
    { label: t.nav.tourism, href: '#tourism' },
    { label: t.nav.map, href: '#map' },
    { label: t.nav.tips, href: '#tips' },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-hawaii-navy/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="section-wrap flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-heading font-bold text-xl tracking-wide transition-colors ${
            scrolled ? 'text-ocean dark:text-ocean-light' : 'text-white'
          }`}
        >
          🌺 O'haii
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`text-sm font-medium transition-colors hover:text-ocean dark:hover:text-ocean-light ${
                scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
              scrolled
                ? 'border-ocean text-ocean dark:border-ocean-light dark:text-ocean-light hover:bg-ocean hover:text-white dark:hover:bg-ocean-light dark:hover:text-hawaii-navy'
                : 'border-white/60 text-white hover:bg-white/20'
            }`}
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`p-2 rounded-full transition-all ${
              scrolled
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-hawaii-surface'
                : 'text-white/90 hover:bg-white/20'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-full transition-all ${
              scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-hawaii-navy border-t border-gray-100 dark:border-hawaii-surface shadow-lg">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-hawaii-surface transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
