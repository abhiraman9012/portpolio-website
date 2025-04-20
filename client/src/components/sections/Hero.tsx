import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Code, Mail, Phone, Linkedin, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 z-0"></div>
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              <span className="block">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Abhijit Dengale
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground">
              AI Agent Developer & Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Specializing in machine learning, AI automation, and advanced algorithms to create 
              scalable and intelligent systems that learn, adapt, and grow.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="shadow-lg">
                <a href="#projects">
                  <Code className="mr-2 h-5 w-5" />
                  View Projects
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="shadow-lg">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg">
                <a href="#" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="mt-10 flex gap-6">
              <a 
                href="mailto:abhijitdengale2003@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:+919370162316" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhijitdengale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://abhijit01.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Website"
              >
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-30 blur-xl rounded-full"></div>
              <div className="w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl relative bg-card border-4 border-card">
                <img 
                  src="https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-lg shadow-lg p-3 flex flex-col items-center">
                <div className="text-lg font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
