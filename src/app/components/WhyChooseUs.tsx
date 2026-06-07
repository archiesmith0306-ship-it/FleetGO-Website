import { motion } from 'motion/react';
import { Shield, Clock, Award, TrendingUp, Headphones, CheckCircle, Phone } from 'lucide-react';

const features = [
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock fleet assistance and emergency roadside support, every day of the year.' },
  { icon: Award, title: '4+ Years Experience', description: 'Proven track record with industry leaders like Penske, Ryder, and MHC Kenworth.' },
  { icon: Shield, title: 'Compliance Guaranteed', description: 'ELD compliance, DOT regulations, and all industry standards maintained for your fleet.' },
  { icon: TrendingUp, title: 'Cost Optimization', description: 'Reduce downtime and maintenance costs with our preventative care programs.' },
  { icon: Headphones, title: 'Dedicated Team', description: 'Personal account managers who know your fleet and are committed to your success.' },
  { icon: CheckCircle, title: 'Transparent Pricing', description: 'No hidden fees. Clear, predictable pricing that scales with your fleet size.' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0b1829]">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-1 bg-[#c8970d]" />
            <span className="font-oswald uppercase tracking-[0.2em] text-[#c8970d] text-sm">Why FleetGO</span>
          </div>
          <h2 className="font-oswald uppercase text-4xl md:text-5xl text-white">
            The Experienced Partner<br />
            <span className="text-slate-400">Your Fleet Deserves</span>
          </h2>
        </motion.div>
      </div>

      {/* Benefit cards grid */}
      <div className="max-w-7xl mx-auto px-6 pb-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-[#0b1829] hover:bg-[#132338] p-8 transition-all border-r border-b border-white/10"
            >
              <div className="bg-[#c8970d] w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-oswald uppercase text-white text-xl mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-white/10 bg-[#132338] mt-0"
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-oswald uppercase text-2xl text-white">Ready to Optimize Your Fleet?</h3>
            <p className="text-slate-400 mt-1">Join industry leaders who trust FleetGO for their operations.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:3313138474"
              className="font-oswald uppercase tracking-wider bg-[#c8970d] hover:bg-[#a87b0a] text-white px-7 py-3.5 text-sm flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now: (331) 313-8474
            </a>
            <a
              href="mailto:archie.white@myfleetgo.com"
              className="font-oswald uppercase tracking-wider border border-white/30 hover:border-white text-white px-7 py-3.5 text-sm flex items-center gap-2 transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
