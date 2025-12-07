import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift"
    >
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <Button asChild variant="ghost" size="sm" className="flex-1">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              Demo
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="flex-1">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" />
              Código
            </a>
          </Button>
          <Button asChild variant="default" size="sm" className="flex-1">
            <Link to={`/projetos/${project.slug}`}>
              Detalhes
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
