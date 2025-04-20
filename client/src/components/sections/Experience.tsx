import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experienceData } from "@/lib/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30 dark:bg-dark-800 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and contributions</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              className="mb-12 relative experience-line pl-6 md:pl-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <div className="md:w-1/3">
                  <Card className="mb-4 md:mb-0">
                    <CardContent className="p-4">
                      <div className="font-semibold text-primary">{experience.period}</div>
                      <div className="text-foreground font-bold text-lg">{experience.company}</div>
                      <div className="text-muted-foreground">{experience.role}</div>
                      <div className="text-muted-foreground text-sm">{experience.location}</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-2/3">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Key Achievements:</h3>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="text-foreground font-medium">Key Skills:</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {experience.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center text-primary hover:underline">
              <span>View Full Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-line::before {
          content: "";
          position: absolute;
          left: -1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)));
        }
        @media (max-width: 768px) {
          .experience-line::before {
            left: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
