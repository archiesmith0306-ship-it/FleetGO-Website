import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-white border-t border-slate-200">
      {/* Dark top bar with contact info */}
      <div className="bg-[#0b1829] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#c8970d]" />
            <span className="font-oswald uppercase tracking-[0.2em] text-[#c8970d] text-sm">Contact Us</span>
          </div>
          <h2 className="font-oswald uppercase text-4xl md:text-5xl text-white mb-10">
            Let's Talk About<br />
            <span className="text-[#c8970d]">Your Fleet</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:3313138474"
              className="group flex items-start gap-4 border border-white/20 hover:border-[#c8970d] p-5 transition-all"
            >
              <div className="bg-[#c8970d] p-3 flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-oswald uppercase tracking-wider text-slate-400 text-xs mb-1">Call Us</div>
                <div className="font-oswald text-white text-xl group-hover:text-[#c8970d] transition-colors">
                  (331) 313-8474
                </div>
                <div className="text-slate-500 text-xs mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Available 24/7
                </div>
              </div>
            </a>

            <a
              href="mailto:archie.white@myfleetgo.com"
              className="group flex items-start gap-4 border border-white/20 hover:border-[#c8970d] p-5 transition-all"
            >
              <div className="bg-[#c8970d] p-3 flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-oswald uppercase tracking-wider text-slate-400 text-xs mb-1">Email Us</div>
                <div className="font-oswald text-white text-base group-hover:text-[#c8970d] transition-colors break-all">
                  archie.white@myfleetgo.com
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 border border-white/20 p-5">
              <div className="bg-[#c8970d] p-3 flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-oswald uppercase tracking-wider text-slate-400 text-xs mb-1">Office</div>
                <div className="text-white text-sm leading-relaxed">
                  1811 W Diehl Road, Suite 200<br />
                  Naperville, IL 60563
                </div>
                <div className="text-slate-500 text-xs mt-1">Nationwide Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-[340px] border-b border-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.0846879155643!2d-88.16911!3d41.79333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e572e8c8e8e8f%3A0x0!2s1811%20W%20Diehl%20Rd%2C%20Naperville%2C%20IL%2060563!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FleetGO Office Location"
        />
      </div>

      {/* Form section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-oswald uppercase text-2xl text-[#0b1829] mb-4">Why Choose FleetGO?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Whether you manage 5 trucks or 500, we have the expertise and dedication to keep
                your fleet operating at peak efficiency.
              </p>
              <ul className="space-y-4">
                {[
                  '24/7 dedicated support team — never an answering machine',
                  'Proven track record with fleets of all sizes across the US',
                  'Transparent pricing with no hidden fees or surprises',
                  'Cutting-edge technology integration (ELD, GPS, Digital Reporting)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="text-[#c8970d] text-lg leading-none mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-l-4 border-[#c8970d] pl-4 bg-yellow-50 py-4 pr-4">
                <p className="text-sm text-slate-700">
                  <strong className="text-[#0b1829]">Trusted clients include:</strong> Dadakhon Trans Corp and Primeweek —
                  real trucking operations that rely on FleetGO every single day.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="border border-slate-200 bg-[#f4f5f7]">
                <div className="bg-[#0b1829] px-6 py-4">
                  <h3 className="font-oswald uppercase tracking-wider text-white">Request a Free Consultation</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-oswald uppercase tracking-wider mb-1.5 text-[#0b1829]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:border-[#c8970d] focus:ring-1 focus:ring-[#c8970d] transition-all text-slate-900 text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-oswald uppercase tracking-wider mb-1.5 text-[#0b1829]">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:border-[#c8970d] focus:ring-1 focus:ring-[#c8970d] transition-all text-slate-900 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-oswald uppercase tracking-wider mb-1.5 text-[#0b1829]">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:border-[#c8970d] focus:ring-1 focus:ring-[#c8970d] transition-all text-slate-900 text-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-oswald uppercase tracking-wider mb-1.5 text-[#0b1829]">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:border-[#c8970d] focus:ring-1 focus:ring-[#c8970d] transition-all text-slate-900 text-sm"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="fleetSize" className="block text-xs font-oswald uppercase tracking-wider mb-1.5 text-[#0b1829]">
                        Fleet Size
                      </label>
                      <select
                        id="fleetSize"
                        name="fleetSize"
                        value={formData.fleetSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:border-[#c8970d] focus:ring-1 focus:ring-[#c8970d] transition-all text-slate-900 text-sm"
                      >
                        <option value="">Select size</option>
                        <option value="1-9">1–9 trucks</option>
                        <option value="10-19">10–19 trucks</option>
                        <option value="20-29">20–29 trucks</option>
                        <option value="30-50">30–50 trucks</option>
                        <option value="50+">50+ trucks</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-oswald uppercase tracking-wider mb-1.5 text-[#0b1829]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:border-[#c8970d] focus:ring-1 focus:ring-[#c8970d] transition-all text-slate-900 text-sm resize-none"
                      placeholder="Tell us about your fleet management needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-oswald uppercase tracking-wider bg-[#c8970d] hover:bg-[#a87b0a] text-white py-4 flex items-center justify-center gap-2 transition-all text-sm"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
