import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index?: number;
}

export function TimelineItem({ year, title, description, index = 0 }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-primary shadow-glow" />
      
      <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
        <span className="text-xs font-medium text-primary">{year}</span>
        <h4 className="font-semibold mt-1">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </motion.div>
  );
}
