import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  BookOpen, 
  Medal, 
  BrainCircuit, 
  Terminal, 
  Server,
  Database,
  CloudCog,
  GitBranch,
  ChevronDown,
  ChevronUp,
  Sparkles,
  School
} from "lucide-react";
import { skillsData, certificationsData } from "@/lib/constants";

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      key={index} 
      className="skill-badge bg-muted dark:bg-dark-600 rounded-lg p-5 flex flex-col items-center shadow-md relative overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        scale: 1.03
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-70"></div>
      
      <motion.div 
        className="relative z-10"
        animate={isHovered ? { scale: 1.1, y: -3 } : { scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {skill.icon}
      </motion.div>
      
      <span className="text-foreground font-medium mt-3 mb-2">{skill.name}</span>
      
      <div className="w-full mt-1 relative">
        <Progress 
          value={0} 
          className="h-2 bg-background/50"
        />
        <motion.div 
          className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        />
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-center p-2 text-xs text-primary font-medium">
          {skill.proficiency}% Proficiency
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
    >
      <Card className="overflow-hidden border-t-4 hover:shadow-lg transition-shadow duration-300"
        style={{ borderTopColor: `hsl(var(--${index % 2 ? 'accent' : 'primary'}))` }}
      >
        <CardContent className="p-0">
          <motion.div 
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
          >
            <div className="flex items-center">
              <motion.div 
                className="text-primary mr-3"
                animate={{ rotate: isExpanded ? 0 : 360 }}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </motion.div>
          </motion.div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {category.skills.map((skill, i) => (
                      <SkillCard key={i} skill={skill} index={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card className="bg-muted dark:bg-dark-600 h-full">
        <CardContent className="p-5 flex items-start h-full">
          <div className="bg-primary/10 p-3 rounded-full mr-3 flex-shrink-0">
            {cert.icon}
          </div>
          <div>
            <div className="text-foreground font-medium">{cert.name}</div>
            <div className="text-muted-foreground text-sm mt-1">{cert.issuer}</div>
            <Badge className="mt-3 bg-primary/10 hover:bg-primary/20 text-primary border-none">
              Certified
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  return (
    <section id="skills" className="py-20 bg-muted/30 dark:bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-primary/3 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-accent/3 to-transparent rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
          </motion.div>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I specialize in</p>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skillCategory, index) => (
            <SkillCategory key={index} category={skillCategory} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-t-4 overflow-hidden" style={{ borderTopColor: 'hsl(var(--primary))' }}>
            <CardContent className="p-6">
              <div className="flex items-center mb-8">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Medal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certifications & Achievements</h3>
                <motion.div 
                  className="ml-2"
                  animate={{ 
                    rotate: [0, 5, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 3 
                  }}
                >
                  <Sparkles className="h-5 w-5 text-amber-500" />
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {certificationsData.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border-t-4 overflow-hidden" style={{ borderTopColor: 'hsl(var(--accent))' }}>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 p-2 rounded-full mr-3">
                  <School className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-muted/50 dark:bg-dark-600 overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent"></div>
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      <div className="md:w-1/4">
                        <div className="text-muted-foreground font-medium">May 2021 – July 2024</div>
                        <Badge variant="outline" className="mt-2 bg-accent/10 text-accent border-none">
                          Bachelor's Degree
                        </Badge>
                      </div>
                      <div className="md:w-3/4">
                        <div className="text-foreground font-bold text-lg mb-2">
                          Bachelor of Engineering - Computer Engineering
                        </div>
                        <div className="text-muted-foreground mb-3">Sandip Institute of Technology & Research Centre</div>
                        <p className="text-muted-foreground text-sm">
                          Focused on advanced computer science concepts, machine learning algorithms, and AI systems development. 
                          Graduated with honors and completed significant projects in intelligent systems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
