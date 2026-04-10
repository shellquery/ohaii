import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function TravelTips() {
  const { t } = useApp();
  const { title, subtitle, items } = t.tips;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="tips" className="py-24 bg-gray-50 dark:bg-hawaii-surface">
      <div className="section-wrap">
        <h2 className="section-title text-gray-900 dark:text-white">{title}</h2>
        <p className="section-sub">{subtitle}</p>

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="card overflow-visible rounded-xl">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-ocean flex-shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-hawaii-navy pt-4">
                  {item.body}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
