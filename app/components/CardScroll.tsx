'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import { ScrollArea } from '@/components/ui/scroll-area';

const CardScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: React.SyntheticEvent<HTMLDivElement>) => {
    setScrollY(event.currentTarget.scrollTop);
  };



  return (
    <section className='w-full max-h-[550px] py-4 px-4'>
      <ScrollArea
      
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



      </ScrollArea>
    </section>
  );
};

export default CardScroll;
