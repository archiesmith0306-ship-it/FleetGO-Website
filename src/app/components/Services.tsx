import { motion } from 'motion/react';
import { Truck, BarChart3, Users, Shield, Clock, FileText, Wrench, Headphones } from 'lucide-react';
import bgVideo from '../../imports/7019381-uhd_4096_2160_25fps-1.mp4';

const features = [
  { icon: Clock, title: '24/7 Fleet Assistance', description: 'Round-the-clock dedicated support for all your fleet maintenance needs' },
  { icon: Wrench, title: 'Preventative Maintenance', description: 'Proactive care to keep your fleet running and minimize costly downtime' },
  { icon: Shield, title: 'ELD Compliance', description: 'Stay compliant with all DOT regulations and industry standards' },
  { icon: BarChart3, title: 'Cost Analysis & Reports', description: 'Detailed insights on breakdown frequency, costs, and budget planning' },
  { icon: FileText, title: 'Work Order Management', description: 'Complete service history tracking and documentation' },
  { icon: Users, title: 'Driver Support Services', description: 'Recruitment, training, and safety programs for your team' },
  { icon: Truck, title: 'Fleet Optimization', description: 'Maximize efficiency with route planning and load distribution' },
  { icon: Headphones, title: 'Dedicated Account Manager', description: 'Personal point of contact committed to your success' },
];

const extras = [
  {
    category: 'Fleet Management',
    items: ['Virtual Audit & Cleaning', 'Inventory Management', 'Breakdown Frequency Analysis'],
  },
  {
    category: 'Supply Chain',
    items: ['Tender Tracking & Control', 'Load Distribution', 'Vendor Relationships'],
  },
  {
    category: 'Technology',
    items: ['GPS Tracking Integration', 'Digital Reporting Tools', 'Automated Compliance'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-6 overflow-hidden">
      {/* Background video — dark navy overlay for readability */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0b1829]/85" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-1 bg-[#c8970d]" />
            <span className="font-oswald uppercase tracking-[0.2em] text-[#c8970d] text-sm">What We Do</span>
          </div>
          <h2 className="font-oswald uppercase text-4xl md:text-5xl text-white max-w-3xl">
            Complete Fleet Solutions<br />
            <span className="text-[#c8970d]">From A to Z</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl text-lg">
            Comprehensive services designed to keep your trucks on the road and your business profitable.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-[#0b1829]/60 hover:bg-[#c8970d]/20 border-r border-b border-white/10 p-6 transition-all cursor-pointer"
            >
              <div className="bg-[#c8970d] w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-oswald uppercase text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Plus Much More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 border border-white/20 bg-white/5 p-10"
        >
          <h3 className="font-oswald uppercase text-2xl text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-[#c8970d] block" />
            Plus Much More
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {extras.map((group) => (
              <div key={group.category}>
                <h4 className="font-oswald uppercase tracking-wider text-[#c8970d] mb-4">{group.category}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-[#c8970d] mt-1">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
