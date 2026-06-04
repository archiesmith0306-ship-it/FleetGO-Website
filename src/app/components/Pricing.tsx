import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

const pricingPlans = [
  { trucks: '1–9 Trucks', price: '$100', unit: '/truck/mo', popular: false },
  { trucks: '10–19 Trucks', price: '$90', unit: '/truck/mo', popular: true },
  { trucks: '20–29 Trucks', price: '$80', unit: '/truck/mo', popular: false },
  { trucks: '30–50 Trucks', price: '$70', unit: '/truck/mo', popular: false },
  { trucks: '50+ Trucks', price: 'Negotiable', unit: '', popular: false },
];

const features = [
  'Fleet Management & Maintenance',
  '24/7 Dedicated Support',
  'ELD Compliance Monitoring',
  'Preventative Maintenance',
  'Monthly Reporting & Analytics',
  'Work Order Management',
  'Breakdown Cost Analysis',
  'Dedicated Account Manager',
];

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-[#f4f5f7] border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-1 bg-[#c8970d]" />
            <span className="font-oswald uppercase tracking-[0.2em] text-[#c8970d] text-sm">Fleet Pricing</span>
          </div>
          <h2 className="font-oswald uppercase text-4xl md:text-5xl text-[#0b1829]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl text-lg">
            Scale-based plans with no hidden fees. Pay only for what your fleet needs.
          </p>
        </motion.div>

        {/* Pricing table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-slate-300 bg-white mb-10 overflow-hidden"
        >
          {/* Table header */}
          <div className="bg-[#0b1829] px-6 py-4 flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#c8970d]" />
            <span className="font-oswald uppercase tracking-wider text-white">Fleet Management Plans</span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-200">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.trucks}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 transition-colors ${
                  plan.popular ? 'bg-yellow-50 border-l-4 border-[#c8970d]' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${plan.popular ? 'bg-[#c8970d]' : 'bg-slate-300'}`} />
                  <div>
                    <div className="font-oswald uppercase text-[#0b1829] text-lg flex items-center gap-3">
                      {plan.trucks}
                      {plan.popular && (
                        <span className="bg-[#c8970d] text-white text-xs px-2 py-0.5 font-oswald uppercase tracking-wider">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-slate-500">All features included</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className={`font-oswald text-3xl ${plan.popular ? 'text-[#c8970d]' : 'text-[#0b1829]'}`}>
                      {plan.price}
                    </span>
                    {plan.unit && <span className="text-slate-500 text-sm ml-1">{plan.unit}</span>}
                  </div>
                  <button
                    onClick={scrollToContact}
                    className={`font-oswald uppercase tracking-wider text-sm px-5 py-2.5 transition-all whitespace-nowrap ${
                      plan.popular
                        ? 'bg-[#c8970d] hover:bg-[#a87b0a] text-white'
                        : 'border border-[#0b1829] text-[#0b1829] hover:bg-[#0b1829] hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Plans Include */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-300 p-8 mb-8"
        >
          <h3 className="font-oswald uppercase text-xl text-[#0b1829] mb-6 flex items-center gap-3">
            <span className="w-6 h-1 bg-[#c8970d] block" />
            All Plans Include
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                <Check className="w-4 h-4 text-[#c8970d] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="border border-slate-300 bg-white">
            <div className="bg-[#0b1829] px-6 py-3">
              <h4 className="font-oswald uppercase tracking-wider text-white">Tender Tracking & Control</h4>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-slate-600 text-sm">1–25 Truckers</span>
                <span className="font-oswald text-xl text-[#0b1829]">$30<span className="text-sm text-slate-500">/tender</span></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 text-sm">26+ Truckers</span>
                <span className="font-oswald text-xl text-[#c8970d]">$20<span className="text-sm text-slate-500">/tender</span></span>
              </div>
            </div>
          </div>

          <div className="border border-slate-300 bg-white">
            <div className="bg-[#0b1829] px-6 py-3">
              <h4 className="font-oswald uppercase tracking-wider text-white">Supply Chain Procurement</h4>
            </div>
            <div className="p-6">
              <p className="text-slate-600 text-sm mb-4">
                We find the best-priced leasing &amp; renting companies for your fleet's needs.
              </p>
              <div className="flex items-center gap-3">
                <span className="font-oswald text-2xl text-[#0b1829]">50%</span>
                <span className="text-slate-500 text-sm">of first-time supplier fee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
