import { motion } from "framer-motion";

const Button = ({ text }: { text: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4"
    >
      {text}
    </motion.button>
  );
};

export default Button;
