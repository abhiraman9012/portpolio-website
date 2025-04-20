import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, X, Maximize2 } from "lucide-react";
import { projectsData } from "@/lib/constants";

const ProjectCard = ({ project, index, openModal }) => {
  return (
    <motion.div 
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden shadow-lg h-full flex flex-col group">
        <div className="relative h-60 overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-6">
              <motion.h3 
                className="text-xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {project.title}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.1 }}
                  >
                    <Badge variant="outline" className="bg-primary/70 border-none text-white">
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.button
            className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => openModal(project)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Maximize2 className="h-4 w-4 text-white" />
          </motion.button>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <motion.a 
              href={project.link} 
              className="text-primary hover:underline font-medium flex items-center group"
              whileHover={{ x: 5 }}
            >
              <span>View Details</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <div className="flex gap-2">
              <motion.div whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10" asChild>
                  <a href={project.github} aria-label="GitHub repository" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10" asChild>
                  <a href={project.demo} aria-label="Live demo" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectModal = ({ project, closeModal }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-card rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeModal}
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} className="bg-primary/10 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-card dark:bg-dark-900 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing my recent work and technical achievements</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              openModal={openModal} 
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="relative overflow-hidden group">
              <a href="#" className="inline-flex items-center">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary w-1/3 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out opacity-30"></span>
                <span>View All Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        project={modalProject} 
        closeModal={closeModal} 
      />
    </section>
  );
};

export default Projects;
