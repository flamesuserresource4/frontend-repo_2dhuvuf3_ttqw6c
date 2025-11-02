import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Wallet, Shield } from 'lucide-react';

const features = [
  {
    title: 'Beautiful digital cards',
    desc: 'Design branded stamp cards in minutes with our drag-and-drop builder and delightful animations.',
    icon: BadgeCheck,
  },
  {
    title: 'One-tap checkout',
    desc: 'Reward redemptions that feel instant. Works seamlessly across web, in-store QR, and mobile wallets.',
    icon: Wallet,
  },
  {
    title: 'Smart anti-fraud',
    desc: 'Verified stamping, device fingerprinting, and role-based approvals keep your program clean.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Everything you need to run loyalty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-slate-600"
          >
            From design to analytics, stampey brings your stamp program to life with a playful, modern experience.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <f.icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
