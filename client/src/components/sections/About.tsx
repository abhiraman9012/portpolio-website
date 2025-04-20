import { motion } from "framer-motion";
import { Code, Users, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card dark:bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Who I am and what drives my passion for building intelligent systems</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Tech workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="font-semibold text-white text-lg">AI Agent & Full-Stack Development</div>
                  <div className="text-gray-200">Building solutions that learn and adapt</div>
                </div>
              </div>
            </div>
            
            <Card className="absolute -top-6 -left-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">AI Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-xs text-muted-foreground">Team Members Led</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                As an AI Agent Developer and Full-Stack Developer, I specialize in machine learning, AI automation, and advanced algorithms to create scalable and intelligent systems. My expertise spans from AI-driven applications to full-stack web development and cloud-based solutions.
              </p>
              <p>
                Leading ZyraTech, I've successfully delivered AI-powered tools that increased customer engagement and streamlined operations, while my role as a Project Manager at Money Forward involved optimizing workflows for high-stakes fintech projects.
              </p>
              <p>
                I am passionate about developing solutions that can learn, adapt, and grow, making me an ideal candidate for AI agent development roles. My technical expertise combined with business acumen allows me to bridge the gap between innovative technology and practical business applications.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="flex flex-col items-center p-4">
                <Code className="h-8 w-8 text-primary mb-2" />
                <div className="text-center">
                  <div className="font-medium text-foreground">Development</div>
                  <div className="text-sm text-muted-foreground">Full-Stack & AI</div>
                </div>
              </Card>
              <Card className="flex flex-col items-center p-4">
                <Users className="h-8 w-8 text-primary mb-2" />
                <div className="text-center">
                  <div className="font-medium text-foreground">Leadership</div>
                  <div className="text-sm text-muted-foreground">Team & Project</div>
                </div>
              </Card>
              <Card className="flex flex-col items-center p-4">
                <Brain className="h-8 w-8 text-primary mb-2" />
                <div className="text-center">
                  <div className="font-medium text-foreground">AI Solutions</div>
                  <div className="text-sm text-muted-foreground">ML & Automation</div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
