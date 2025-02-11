"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          WebbyWolf
        </Link>
        <div className="hidden md:flex space-x-6">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition">
              {item}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden bg-white shadow-md"
        >
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="block p-4 border-b" onClick={() => setOpen(false)}>
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
