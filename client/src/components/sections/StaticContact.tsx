import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  })
};

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-2xl mr-3 text-primary" />,
      label: "Email",
      value: "abhijitdengale2003@gmail.com",
      link: "mailto:abhijitdengale2003@gmail.com",
      delay: 0.2
    },
    {
      icon: <FaPhone className="text-2xl mr-3 text-primary" />,
      label: "Phone",
      value: "+91 9370162316",
      link: "tel:+919370162316",
      delay: 0.3
    }
  ];

  return (
    <div className="space-y-6 mb-8">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        Contact Information
      </h3>
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={item.delay}
          >
            {item.icon}
            <div>
              <p className="text-muted-foreground text-sm">{item.label}</p>
              <a href={item.link} className="hover:text-primary transition-colors">
                {item.value}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        Social Profiles
      </h3>
      <div className="flex gap-4">
        <SocialLink 
          href="https://www.linkedin.com/in/abhijit-dengale" 
          icon={<FaLinkedin />} 
          color="bg-[#0077B5]" 
          label="LinkedIn"
          delay={0.4}
        />
        <SocialLink 
          href="https://github.com/abhiraman9012" 
          icon={<FaGithub />} 
          color="bg-[#333]" 
          label="GitHub"
          delay={0.5}
        />
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, color, label, delay }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} text-white p-3 rounded-full inline-flex items-center justify-center hover:opacity-80 transition-opacity`}
      whileHover={{ scale: 1.1 }}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </motion.a>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate mailto link with form data
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    
    // Open mailto link in new tab
    window.open(`mailto:abhijitdengale2003@gmail.com?subject=${subject}&body=${body}`);
    
    toast({
      title: "Email client opened",
      description: "Please send the email from your email client to complete the message.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
      >
        <FormField
          label="Name"
          id="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          delay={0.2}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.3}
      >
        <FormField
          label="Email"
          id="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          delay={0.3}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.4}
      >
        <FormField
          label="Subject (Optional)"
          id="subject"
          placeholder="What is this regarding?"
          value={formData.subject}
          onChange={handleChange}
          delay={0.4}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
        className="col-span-2"
      >
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          rows={5}
          className="w-full resize-none"
          value={formData.message}
          onChange={handleChange}
        />
      </motion.div>

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.6}
      >
        <Button 
          type="submit" 
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </form>
  );
};

const FormField = ({ label, id, placeholder, value, onChange, delay }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <Input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full"
        required
      />
    </div>
  );
};

const StaticContact = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>
          
          <motion.div
            className="bg-background rounded-lg p-6 shadow-sm border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaticContact;