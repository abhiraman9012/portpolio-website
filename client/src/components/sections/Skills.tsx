import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  BookOpen, 
  Medal, 
  BrainCircuit, 
  Terminal, 
  Server,
  Database,
  CloudCog,
  GitBranch
} from "lucide-react";
import { skillsData, certificationsData } from "@/lib/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30 dark:bg-dark-800 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I specialize in</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    {skillCategory.icon}
                    <h3 className="text-xl font-bold text-foreground ml-3">{skillCategory.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skillCategory.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className="skill-badge transition-transform duration-300 bg-muted dark:bg-dark-600 rounded-lg p-4 flex flex-col items-center shadow-sm hover:-translate-y-1"
                      >
                        {skill.icon}
                        <span className="text-foreground font-medium mt-2">{skill.name}</span>
                        <div className="w-full mt-2">
                          <Progress value={skill.proficiency} className="h-1.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Medal className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificationsData.map((cert, index) => (
                  <Card key={index} className="bg-muted dark:bg-dark-600">
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        {cert.icon}
                      </div>
                      <div>
                        <div className="text-foreground font-medium">{cert.name}</div>
                        <div className="text-muted-foreground text-sm">{cert.issuer}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              <Card className="bg-muted dark:bg-dark-600">
                <CardContent className="p-5 flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="text-muted-foreground">May 2021 – July 2024</div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="text-foreground font-bold text-lg">Bachelor of Engineering - Computer Engineering</div>
                    <div className="text-muted-foreground">Sandip Institute of Technology & Research Centre</div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
