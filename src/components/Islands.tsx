import { MapPin } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Islands() {
  const { t } = useApp();
  const { items, title, subtitle } = t.islands;

  return (
    <section id="islands" className="py-24 bg-white dark:bg-hawaii-navy">
      <div className="section-wrap">
        <h2 className="section-title text-gray-900 dark:text-white">{title}</h2>
        <p className="section-sub">{subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((island) => (
            <div key={island.id} className="card group cursor-pointer">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={island.img}
                  alt={island.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${island.color} opacity-30 group-hover:opacity-20 transition-opacity`} />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold bg-white/90 dark:bg-hawaii-navy/90 text-gray-700 dark:text-gray-200 px-2.5 py-1 rounded-full">
                    {island.nickname}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">{island.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{island.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {island.highlights.map((h) => (
                    <span key={h} className="text-xs bg-ocean/10 text-ocean dark:bg-ocean-light/10 dark:text-ocean-light px-2 py-0.5 rounded-full font-medium">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Best for */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <MapPin size={13} className="text-sand" />
                  <span className="font-medium">{island.bestFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
