import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    icon: <Github size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    icon: <Linkedin size={20} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-username",
    icon: <Twitter size={20} />,
  },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex items-center gap-4"
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
