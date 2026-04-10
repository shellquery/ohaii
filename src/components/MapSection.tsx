import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useApp } from '../contexts/AppContext';

// Fix Leaflet default icon paths (Vite issue)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const iconColors: Record<string, string> = {
  city: '#0077B6',
  beach: '#F4A261',
  nature: '#52B788',
  history: '#E76F51',
  scenic: '#7B2D8B',
};

function makeIcon(type: string) {
  const color = iconColors[type] ?? '#0077B6';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" width="24" height="32">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z" fill="${color}"/>
    <circle cx="12" cy="12" r="5" fill="white"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [24, 32],
    iconAnchor: [12, 32],
    popupAnchor: [0, -32],
  });
}

export default function MapSection() {
  const { t, lang } = useApp();
  const { title, subtitle, markers } = t.map;

  useEffect(() => {
    // Ensure Leaflet CSS is loaded
  }, []);

  return (
    <section id="map" className="py-24 bg-white dark:bg-hawaii-navy">
      <div className="section-wrap">
        <h2 className="section-title text-gray-900 dark:text-white">{title}</h2>
        <p className="section-sub">{subtitle}</p>

        <div className="rounded-2xl overflow-hidden shadow-glass border border-gray-100 dark:border-hawaii-surface" style={{ height: 500 }}>
          <MapContainer
            center={[20.5, -157.5]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((m) => (
              <Marker key={m.name} position={[m.lat, m.lng]} icon={makeIcon(m.type)}>
                <Popup>
                  <div className="font-body text-sm">
                    <p className="font-bold text-ocean">{lang === 'zh' ? m.nameZh : m.name}</p>
                    {lang === 'zh' && <p className="text-gray-500 text-xs">{m.name}</p>}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {Object.entries(iconColors).map(([type, color]) => {
            const labels: Record<string, [string, string]> = {
              city: ['City', '城市'], beach: ['Beach', '海滩'], nature: ['Nature', '自然'],
              history: ['Historic', '历史'], scenic: ['Scenic', '风景'],
            };
            const label = lang === 'zh' ? labels[type]?.[1] : labels[type]?.[0];
            return (
              <div key={type} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: color }} />
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
