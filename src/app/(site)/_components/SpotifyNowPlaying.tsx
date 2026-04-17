import { motion } from "framer-motion";

const SpotifyNowPlaying = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
    >

    </motion.div>
  );
};

export default SpotifyNowPlaying;
