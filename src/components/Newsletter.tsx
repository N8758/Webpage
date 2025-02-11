"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return alert("Invalid Email");
    setSuccess(true);
  };

  return (
    <div className="max-w-lg mx-auto text-center p-6">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold">
        Subscribe to Our Newsletter
      </motion.h2>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-3 border rounded-l-md"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-3 rounded-r-md">Subscribe</button>
      </form>
      {success && <p className="text-green-500 mt-2">Subscribed Successfully!</p>}
    </div>
  );
};

export default Newsletter;
