import { useApp } from '../contexts/AppContext';

export default function History() {
  const { t } = useApp();
  const { title, subtitle, events } = t.history;

  return (
    <section id="history" className="py-24 bg-white dark:bg-hawaii-navy">
      <div className="section-wrap">
        <h2 className="section-title text-gray-900 dark:text-white">{title}</h2>
        <p className="section-sub">{subtitle}</p>

        <div className="max-w-3xl mx-auto">
          {events.map((ev, idx) => (
            <div key={idx} className="timeline-item relative flex gap-5 pb-8">
              {/* Icon circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean/10 dark:bg-ocean/20 border-2 border-ocean flex items-center justify-center text-lg z-10">
                {ev.icon}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className="text-xs font-bold bg-ocean text-white px-2.5 py-0.5 rounded-full">{ev.year}</span>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white">{ev.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
