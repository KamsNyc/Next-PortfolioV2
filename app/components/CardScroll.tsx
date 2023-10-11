'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';

const CardScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: React.SyntheticEvent<HTMLDivElement>) => {
    setScrollY(event.currentTarget.scrollTop);
  };



  return (
    <section className='w-full max-h-[450px] py-4'>
      <div
        style={{
          height: '400px',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onScroll={handleScroll}
      >
        <AnimatePresence initial={false}>
          {scrollY < 1 ? (
            <motion.div
              key="card1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Card />
            </motion.div>
          ) : (
            <Card />
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {scrollY < 1 ? (
            <motion.div
              key="card2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Card />
            </motion.div>
          ) : (
            <Card />
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {scrollY < 1 ? (
            <motion.div
              key="card3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Card />
            </motion.div>
          ) : (
            <Card />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CardScroll;
