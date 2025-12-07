import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon?: string;
  index?: number;
}

export function SkillBadge({ name, icon, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
}
