import { ChevronDown } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('${t.hero.img}')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-5xl mb-4 animate-float">{t.hero.greeting}</p>
        <h1 className="font-heading text-6xl md:text-8xl font-black mb-4 leading-tight drop-shadow-lg animate-fade-up">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 text-white/90 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {t.hero.subtitle}
        </p>
        <p className="text-base md:text-lg text-white/75 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {t.hero.description}
        </p>
        <button
          onClick={() => document.getElementById('islands')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary text-base px-8 py-4 animate-fade-up shadow-xl hover:scale-105"
          style={{ animationDelay: '0.3s' }}
        >
          {t.hero.cta}
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('islands')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L48 69.3C96 59 192 37 288 32C384 27 480 37 576 48C672 59 768 69 864 64C960 59 1056 37 1152 32C1248 27 1344 37 1392 42.7L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" className="fill-white dark:fill-hawaii-navy" />
        </svg>
      </div>
    </section>
  );
}
