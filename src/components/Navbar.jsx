import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 font-semibold text-slate-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
            <BadgeCheck size={18} />
          </span>
          <span className="text-lg tracking-tight">stampey</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#demo" className="hover:text-slate-900 transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>

        <motion.a
          href="#get-started"
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get started
        </motion.a>
      </div>
    </header>
  );
};

export default Navbar;
