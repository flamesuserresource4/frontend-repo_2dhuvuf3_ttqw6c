import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0es5q9m3rxc4zGMo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-slate-200 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Launching the future of loyalty
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Digital stamp cards customers love.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg text-slate-600 max-w-xl"
          >
            Meet stampey — the delightful way to create, distribute, and track loyalty stamp cards online. Frictionless for your team, fun for your customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5">
              Start free trial
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">
              See live demo
            </a>
          </motion.div>
        </div>

        <motion.div
          id="demo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <InteractiveStampCard />
        </motion.div>
      </div>
    </section>
  );
};

const InteractiveStampCard = () => {
  const size = 10; // total stamps
  const [filled, setFilled] = useState(0);

  const handleClick = (idx) => {
    setFilled((prev) => (idx + 1 === prev ? prev : Math.max(prev, idx + 1)));
  };

  const isComplete = filled >= size;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Latte Lounge</h3>
            <p className="text-xs text-slate-500">Buy 9 coffees, get the 10th free</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">stampey</span>
        </div>

        <div className="mt-5 grid grid-cols-5 gap-3">
          {Array.from({ length: size }).map((_, i) => {
            const active = i < filled;
            return (
              <motion.button
                key={i}
                onClick={() => handleClick(i)}
                whileTap={{ scale: 0.92 }}
                className={`relative aspect-square w-full rounded-xl ring-1 ring-slate-200 flex items-center justify-center ${active ? 'bg-emerald-500/90 text-white' : 'bg-white text-slate-400 hover:bg-slate-50'} transition-colors`}
                aria-label={`Stamp ${i + 1}`}
              >
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: active ? 1 : 0.8, opacity: active ? 1 : 0.6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="text-sm font-semibold"
                >
                  {active ? '✓' : i + 1}
                </motion.span>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            {filled < size ? (
              <span>{size - filled} to go</span>
            ) : (
              <span className="text-emerald-600 font-medium">Reward unlocked!</span>
            )}
          </div>
          <button
            disabled={!isComplete}
            className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-all ${isComplete ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
