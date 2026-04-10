import { useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const categoryColors: Record<string, string> = {
  Beach: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  '海滩': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Nature: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  '自然': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  History: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  '历史': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Adventure: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  '冒险': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Scenic: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  '风景': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
};

export default function Tourism() {
  const { t } = useApp();
  const { title, subtitle, categories, items } = t.tourism;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered = activeCategory === categories[0]
    ? items
    : items.filter((i) => i.category === activeCategory);

  return (
    <section id="tourism" className="py-24 bg-gray-50 dark:bg-hawaii-surface">
      <div className="section-wrap">
        <h2 className="section-title text-gray-900 dark:text-white">{title}</h2>
        <p className="section-sub">{subtitle}</p>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-ocean text-white shadow-ocean'
                  : 'bg-white dark:bg-hawaii-navy text-gray-600 dark:text-gray-300 hover:bg-ocean/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div key={item.id} className="card group">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className={`absolute top-2 left-2 tag ${categoryColors[item.category] ?? 'bg-gray-100 text-gray-700'}`}>
                  {item.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-1 gap-2">
                  <h3 className="font-heading font-bold text-gray-900 dark:text-white text-base leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <Star size={13} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <MapPin size={11} className="text-sand flex-shrink-0" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.location}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
