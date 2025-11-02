import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-slate-900 text-white"
        >
          <div className="relative px-8 py-12 sm:px-12 sm:py-16">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Launch your first digital stamp card today</h3>
                <p className="mt-2 text-white/70 max-w-xl">Start free, upgrade when you grow. No credit card required. Cancel anytime.</p>

                <ul className="mt-6 grid gap-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><Star size={16} className="text-yellow-400" /> Unlimited cards on the free plan</li>
                  <li className="flex items-center gap-2"><Star size={16} className="text-yellow-400" /> Team roles and permissions</li>
                  <li className="flex items-center gap-2"><Star size={16} className="text-yellow-400" /> Real-time analytics</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:-translate-y-0.5 transition-all">
                  <Rocket size={18} className="mr-2" /> Start free
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 text-sm font-medium ring-1 ring-white/20 hover:bg-white/15 transition-colors">
                  View pricing
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} stampey — crafted with care.
      </footer>
    </section>
  );
};

export default CTA;
