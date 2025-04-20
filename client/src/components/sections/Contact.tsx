import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  Send,
  Loader2,
  Github,
  Twitter,
  Youtube,
  CheckCircle,
  MessageSquare,
  MapPin,
  Clock
} from "lucide-react";

// Interactive Contact Info Item
const ContactInfoItem = ({ icon, label, value, link, delay }) => {
  return (
    <motion.div 
      className="flex items-start group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div 
        className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/30 transition-colors duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <div>
        <div className="text-muted-foreground text-sm">{label}</div>
        <a 
          href={link} 
          target={link.startsWith('http') ? "_blank" : undefined}
          rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
          className="text-foreground font-medium hover:text-primary transition-colors"
        >
          {value}
        </a>
      </div>
    </motion.div>
  );
};

// Social Media Button
const SocialButton = ({ href, icon, color, label, delay }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`text-white p-3 rounded-full hover:scale-110 transition-transform duration-300`}
      style={{ backgroundColor: color }}
      aria-label={label}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay 
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
    >
      {icon}
    </motion.a>
  );
};

// Form Field Animation
const FormField = ({ label, id, type = "text", placeholder, value, onChange, required = false, delay }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  
  useEffect(() => {
    setHasValue(!!value);
  }, [value]);
  
  return (
    <motion.div 
      className="space-y-2 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Label htmlFor={id} className="transition-colors duration-300">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="relative">
        {type !== "textarea" ? (
          <Input 
            id={id} 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            required={required}
            className="transition-all duration-300 border-2 focus:border-primary"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        ) : (
          <Textarea 
            id={id} 
            rows={5} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            required={required}
            className="transition-all duration-300 border-2 focus:border-primary resize-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        )}
        <AnimatePresence>
          {(isFocused || hasValue) && (
            <motion.div 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStep, setFormStep] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateStep = () => {
    if (formStep === 0) {
      if (!formData.name) {
        toast({
          title: "Name required",
          description: "Please enter your name to continue",
          variant: "destructive"
        });
        return false;
      }
      return true;
    }
    
    if (formStep === 1) {
      if (!formData.email) {
        toast({
          title: "Email required",
          description: "Please enter your email to continue",
          variant: "destructive"
        });
        return false;
      }
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address",
          variant: "destructive"
        });
        return false;
      }
      return true;
    }
    
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setFormStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      setSuccess(true);
      
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setFormStep(0);
        setSuccess(false);
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full"></div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
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
              Get In Touch
            </span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <ContactInfoItem
                      icon={<Mail className="h-5 w-5 text-primary" />}
                      label="Email"
                      value="abhijitdengale2003@gmail.com"
                      link="mailto:abhijitdengale2003@gmail.com"
                      delay={0.1}
                    />
                    <ContactInfoItem
                      icon={<Phone className="h-5 w-5 text-primary" />}
                      label="Phone"
                      value="+91 9370162316"
                      link="tel:+919370162316"
                      delay={0.2}
                    />
                    <ContactInfoItem
                      icon={<Linkedin className="h-5 w-5 text-primary" />}
                      label="LinkedIn"
                      value="linkedin.com/in/abhijitdengale"
                      link="https://www.linkedin.com/in/abhijitdengale"
                      delay={0.3}
                    />
                    <ContactInfoItem
                      icon={<Globe className="h-5 w-5 text-primary" />}
                      label="Website"
                      value="abhijit01.netlify.app"
                      link="https://abhijit01.netlify.app"
                      delay={0.4}
                    />
                    <ContactInfoItem
                      icon={<MapPin className="h-5 w-5 text-primary" />}
                      label="Location"
                      value="Nashik, Maharashtra, India"
                      link="#"
                      delay={0.5}
                    />
                    <ContactInfoItem
                      icon={<Clock className="h-5 w-5 text-primary" />}
                      label="Working Hours"
                      value="9:00 AM - 6:00 PM (IST)"
                      link="#"
                      delay={0.6}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <h3 className="text-xl font-bold text-foreground">Connect With Me</h3>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <SocialButton
                      href="https://www.linkedin.com/in/abhijitdengale"
                      icon={<Linkedin className="h-5 w-5" />}
                      color="#0077B5"
                      label="LinkedIn"
                      delay={0.1}
                    />
                    <SocialButton
                      href="#"
                      icon={<Github className="h-5 w-5" />}
                      color="#333"
                      label="GitHub"
                      delay={0.2}
                    />
                    <SocialButton
                      href="#"
                      icon={<Twitter className="h-5 w-5" />}
                      color="#1DA1F2"
                      label="Twitter"
                      delay={0.3}
                    />
                    <SocialButton
                      href="#"
                      icon={<Youtube className="h-5 w-5" />}
                      color="#FF0000"
                      label="YouTube"
                      delay={0.4}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full border-t-4 border-primary">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Send Me a Message</h3>
                </div>
                
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div 
                      className="flex-grow flex flex-col items-center justify-center text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="mb-4 text-primary">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                        >
                          <CheckCircle className="h-16 w-16" />
                        </motion.div>
                      </div>
                      <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting me. I will get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      id="contact-form" 
                      className="space-y-6 flex-grow flex flex-col"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {formStep === 0 && (
                        <motion.div 
                          className="space-y-6 flex-grow"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FormField
                            label="What's your name?"
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required={true}
                            delay={0.1}
                          />
                          <div className="flex justify-end mt-auto pt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button 
                                type="button" 
                                onClick={nextStep}
                                className="relative overflow-hidden group"
                              >
                                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary w-1/3 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out opacity-30"></span>
                                Next Step
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                      
                      {formStep === 1 && (
                        <motion.div 
                          className="space-y-6 flex-grow"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FormField
                            label="What's your email?"
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required={true}
                            delay={0.1}
                          />
                          <FormField
                            label="Subject (Optional)"
                            id="subject"
                            placeholder="Project discussion, collaboration, etc."
                            value={formData.subject}
                            onChange={handleChange}
                            delay={0.2}
                          />
                          <div className="flex justify-between mt-auto pt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button 
                                type="button" 
                                variant="outline"
                                onClick={prevStep}
                              >
                                Previous
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button 
                                type="button" 
                                onClick={nextStep}
                                className="relative overflow-hidden group"
                              >
                                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary w-1/3 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out opacity-30"></span>
                                Next Step
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                      
                      {formStep === 2 && (
                        <motion.div 
                          className="space-y-6 flex-grow"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FormField
                            label="Your Message"
                            id="message"
                            type="textarea"
                            placeholder="Tell me about your project, requirements, or any questions you have..."
                            value={formData.message}
                            onChange={handleChange}
                            required={true}
                            delay={0.1}
                          />
                          <div className="flex justify-between mt-auto pt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button 
                                type="button" 
                                variant="outline"
                                onClick={prevStep}
                              >
                                Previous
                              </Button>
                            </motion.div>
                            <motion.div 
                              whileHover={{ scale: 1.05 }} 
                              whileTap={{ scale: 0.95 }}
                              className="relative"
                            >
                              <Button 
                                type="submit" 
                                className="relative overflow-hidden group"
                                disabled={isSubmitting}
                              >
                                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary w-1/3 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out opacity-30"></span>
                                {isSubmitting ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                  </>
                                ) : (
                                  <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                  </>
                                )}
                              </Button>
                              {!isSubmitting && (
                                <motion.div 
                                  className="absolute -right-2 -top-2"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ 
                                    type: "spring", 
                                    stiffness: 260, 
                                    damping: 20, 
                                    delay: 0.3 
                                  }}
                                  whileHover={{ scale: 1.2, rotate: 5 }}
                                >
                                  <span className="flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                  </span>
                                </motion.div>
                              )}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
