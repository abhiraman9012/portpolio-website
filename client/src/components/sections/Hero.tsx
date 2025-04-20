import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Code, Mail, Phone, Linkedin, Globe, ChevronDown } from "lucide-react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.05, delay: index * 0.03 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Automation", "Algorithms", "Intelligence", "Innovation"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 z-0"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      {/* Animated particles background */}
      <div className="particle-container absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/20 rounded-full"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm 
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Abhijit Dengale
              </motion.span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground">
              <AnimatedText text="AI Agent Developer & Full-Stack Developer" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Specializing in machine learning, AI {" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="font-semibold text-primary inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
              {" "} to create scalable and intelligent systems that learn, adapt, and grow.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="shadow-lg relative overflow-hidden group">
                  <a href="#projects">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary w-1/3 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out opacity-30"></span>
                    <Code className="mr-2 h-5 w-5" />
                    View Projects
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="secondary" className="shadow-lg">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="outline" className="shadow-lg">
                  <a href="#" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </div>
            
            <div className="mt-10 flex gap-6">
              {['mail', 'phone', 'linkedin', 'globe'].map((icon, index) => (
                <motion.div
                  key={icon}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.2 }}
                >
                  {icon === 'mail' && (
                    <a 
                      href="mailto:abhijitdengale2003@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  )}
                  {icon === 'phone' && (
                    <a 
                      href="tel:+919370162316" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Phone"
                    >
                      <Phone className="h-6 w-6" />
                    </a>
                  )}
                  {icon === 'linkedin' && (
                    <a 
                      href="https://www.linkedin.com/in/abhijitdengale" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                  {icon === 'globe' && (
                    <a 
                      href="https://abhijit01.netlify.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Website"
                    >
                      <Globe className="h-6 w-6" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(var(--primary), 0.3) 0%, rgba(var(--accent), 0.1) 100%)",
                    "radial-gradient(circle, rgba(var(--accent), 0.2) 0%, rgba(var(--primary), 0.1) 100%)",
                    "radial-gradient(circle, rgba(var(--primary), 0.3) 0%, rgba(var(--accent), 0.1) 100%)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -inset-4 blur-xl rounded-full"
              ></motion.div>
              <motion.div 
                className="w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl relative bg-card border-4 border-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-card rounded-lg shadow-lg p-3 flex flex-col items-center"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-lg font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={floatingAnimation}
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
