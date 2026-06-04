import { motion } from 'motion/react';
import heroImage from '../../imports/pexels-yl-lew-88954986-35996049.jpg';

export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b1829]">
      {/* Ken Burns slow pan */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05, x: 0, y: 0 }}
        animate={{ scale: 1.18, x: -30, y: -15 }}
        transition={{
          duration: 18,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark cinematic overlay — heavier than before for readability */}
      <div className="absolute inset-0 bg-[#0b1829]/75" />
      {/* Subtle warm tint at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1829] via-[#0b1829]/40 to-transparent" />
    </div>
  );
}
