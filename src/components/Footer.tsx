import { useApp } from '../contexts/AppContext';

export default function Footer() {
  const { t } = useApp();

  const sections = [
    { label: t.nav.islands, href: '#islands' },
    { label: t.nav.culture, href: '#culture' },
    { label: t.nav.history, href: '#history' },
    { label: t.nav.tourism, href: '#tourism' },
    { label: t.nav.map, href: '#map' },
    { label: t.nav.tips, href: '#tips' },
  ];

  return (
    <footer className="bg-hawaii-navy text-white py-14">
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-heading text-2xl font-bold mb-3">🌺 O'haii</div>
            <p className="text-white/60 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(s.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Islands quick list */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80 uppercase text-xs tracking-widest">Islands</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["O'ahu", 'Maui', 'Hawaiʻi (Big Island)', "Kaua'i", "Moloka'i", "Lāna'i"].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">{t.footer.disclaimer}</p>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} O'haii · Built with Aloha 🤙</p>
        </div>
      </div>
    </footer>
  );
}
