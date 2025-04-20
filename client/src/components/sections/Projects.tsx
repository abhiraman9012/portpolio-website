import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/constants";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card dark:bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing my recent work and technical achievements</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-60">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="bg-primary/70 border-none text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <a href={project.link} className="text-primary hover:underline font-medium flex items-center">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="rounded-full" asChild>
                        <a href={project.github} aria-label="GitHub repository">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full" asChild>
                        <a href={project.demo} aria-label="Live demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild>
            <a href="#" className="inline-flex items-center">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
