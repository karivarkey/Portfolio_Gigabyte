import React from 'react';
import { FlipWords } from './FlipWords';
import { motion } from 'motion/react';

const HeroText = () => {
  const words = ["Aesthetic", "Modern", "Beautiful"];
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-10 mt-24 md:mt-40 text-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white leading-snug"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        Hi, I’m GigaByte.
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-3xl text-white font-medium"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.1 }}
      >
        Computer Science Graduate<br />passionate about crafting
      </motion.p>

      <motion.div
        className="mt-2 text-4xl md:text-6xl font-bold text-white"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.2 }}
      >
        <FlipWords words={words} />
      </motion.div>

      <motion.p
        className="mt-2 text-lg md:text-3xl text-white font-medium"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.3 }}
      >
        Websites & Applications.
      </motion.p>
    </div>
  );
};

export default HeroText;
