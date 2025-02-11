"use client";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-5xl font-bold text-gray-900"
      >
        Welcome to WebbyWolf
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }} 
        className="mt-4 text-lg text-gray-600"
      >
        We craft pixel-perfect experiences.
      </motion.p>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}>
        <Button text="Get Started" />
      </motion.div>
    </section>
  );
};

export default Hero;
