import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/SectionTitle';
import { ProjectCard } from '@/components/ProjectCard';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

export default function Projetos() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.technologies.includes(selectedTag))
    : projects;

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Meus Projetos"
            subtitle="Explore os projetos que desenvolvi, desde ferramentas de produtividade até aplicações com IA."
            centered
          />

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <Badge
              variant={selectedTag === null ? 'default' : 'outline'}
              className={cn(
                'cursor-pointer transition-all hover:scale-105',
                selectedTag === null && 'shadow-md'
              )}
              onClick={() => setSelectedTag(null)}
            >
              Todos
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                className={cn(
                  'cursor-pointer transition-all hover:scale-105',
                  selectedTag === tag && 'shadow-md'
                )}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                Nenhum projeto encontrado com essa tecnologia.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
