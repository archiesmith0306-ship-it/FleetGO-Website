import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Star } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const US_TOPO = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const PINS: { coords: [number, number]; label: string }[] = [
  { coords: [-122.3321, 47.6062], label: 'Seattle' },
  { coords: [-122.4194, 37.7749], label: 'San Francisco' },
  { coords: [-118.2437, 34.0522], label: 'Los Angeles' },
  { coords: [-104.9903, 39.7392], label: 'Denver' },
  { coords: [-96.797, 32.7767], label: 'Dallas' },
  { coords: [-87.6298, 41.8781], label: 'Chicago' },
  { coords: [-95.3698, 29.7604], label: 'Houston' },
  { coords: [-74.006, 40.7128], label: 'New York' },
  { coords: [-84.388, 33.749], label: 'Atlanta' },
  { coords: [-80.1918, 25.7617], label: 'Miami' },
];

export default function CoverageMap() {
  return (
    <section className="py-20 px-6 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-1 bg-[#c8970d]" />
            <span className="font-oswald uppercase tracking-[0.2em] text-[#c8970d] text-sm">Nationwide Network</span>
          </div>
          <h2 className="font-oswald uppercase text-4xl md:text-5xl text-[#0b1829]">
            Wherever Your Fleet Runs,<br />We've Got Coverage
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: copy + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-slate-600 leading-relaxed text-lg">
              We've built a vetted network of repair shops and parts vendors across
              the country — every partner is reviewed, qualified, and trusted to
              keep your trucks rolling.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: MapPin, value: '500+', label: 'Service Locations' },
                { icon: ShieldCheck, value: '100%', label: 'Vetted Partners' },
                { icon: Star, value: '4.8★', label: 'Average Rating' },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 border border-slate-200 p-4 bg-[#f4f5f7]"
                >
                  <div className="bg-[#c8970d] p-2.5 flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-oswald text-2xl text-[#0b1829]">{value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-[#c8970d] pl-4 bg-yellow-50 py-3 pr-4">
              <p className="text-sm text-slate-700">
                <strong>Clients include:</strong> Dadakhon Trans Corp and Primeweek — growing trucking operations that rely on FleetGO daily.
              </p>
            </div>
          </motion.div>

          {/* Right: US map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="border border-slate-200 p-4 md:p-6 bg-[#f4f5f7]">
              <ComposableMap
                projection="geoAlbersUsa"
                projectionConfig={{ scale: 1000 }}
                width={800}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              >
                <Geographies geography={US_TOPO}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#D1D9E3"
                        stroke="#FFFFFF"
                        strokeWidth={0.75}
                        style={{
                          default: { outline: 'none' },
                          hover: { fill: '#b8c5d6', outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {PINS.map((pin, i) => (
                  <Marker key={pin.label} coordinates={pin.coords}>
                    <motion.circle
                      r={5}
                      fill="none"
                      stroke="#c8970d"
                      strokeWidth={1.5}
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 3.2, opacity: 0 }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: 'easeOut',
                      }}
                    />
                    <circle r={4.5} fill="#c8970d" />
                    <circle r={1.8} fill="#FFFFFF" />
                  </Marker>
                ))}
              </ComposableMap>

              <p className="text-center text-xs text-slate-400 mt-3 uppercase tracking-widest font-oswald">
                Coverage Across the Contiguous United States
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
