import { useApp } from '../contexts/AppContext';

export default function Culture() {
  const { t } = useApp();
  const { title, subtitle, items } = t.culture;

  return (
    <section id="culture" className="py-24 bg-gray-50 dark:bg-hawaii-surface">
      <div className="section-wrap">
        <h2 className="section-title text-gray-900 dark:text-white">{title}</h2>
        <p className="section-sub">{subtitle}</p>

        <div className="space-y-16">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-glass aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="text-5xl">{item.emoji}</div>
                <h3 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
