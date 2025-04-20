import React from 'react';
import {
  Code,
  Server,
  Brain,
  GitBranch,
  Database,
  CloudCog,
  CodepenIcon,
  Terminal,
  Globe
} from "lucide-react";

export const experienceData = [
  {
    period: "September 2024 – Present",
    company: "ZyraTech",
    role: "CEO",
    location: "India",
    achievements: [
      "Spearheaded the development and deployment of 10+ AI-driven web applications, increasing client acquisition by 40% and revenue by 20%.",
      "Launched AI-powered tools that improved customer engagement by 40%, driving a 25% increase in monthly active users.",
      "Successfully led a team of 11+ to develop innovative products in AI courses, audiobook sales, and career assistance programs."
    ],
    skills: [
      "AI Automation", 
      "Machine Learning", 
      "Web Development", 
      "Team Leadership", 
      "Cloud Solutions"
    ]
  },
  {
    period: "April 2024 – October 2024",
    company: "Money Forward",
    role: "Project Manager",
    location: "Tokyo, Japan",
    achievements: [
      "Led a cross-functional team of 15+ developers and analysts to deliver 8 fintech projects worth over $2M.",
      "Enhanced project delivery efficiency by 20%, reducing timelines by 3 weeks on average.",
      "Implemented Agile methodologies, optimizing resource management and collaboration."
    ],
    skills: [
      "Agile Project Management", 
      "Machine Learning Integration", 
      "Team Collaboration", 
      "Fintech Solutions"
    ]
  },
  {
    period: "May 2023 – May 2024",
    company: "FlyLab Solutions Pvt Ltd",
    role: "Full-Stack Developer",
    location: "Nashik, Maharashtra, India",
    achievements: [
      "Developed cross-platform mobile applications using Flutter, integrating ReactJS for responsive UIs.",
      "Worked closely with designers and project managers to bring innovative app features to market."
    ],
    skills: [
      "Flutter", 
      "ReactJS", 
      "Mobile App Development", 
      "Full-stack Engineering"
    ]
  }
];

export const projectsData = [
  {
    title: "AI-Powered Chatbot",
    description: "Developed an AI-powered chatbot for customer support, reducing query resolution time by 50% and decreasing support ticket volume by 30%. Improved customer satisfaction by 15% through enhanced interaction efficiency and personalized responses.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
    tags: ["Machine Learning", "NLP"],
    link: "#",
    github: "#",
    demo: "#"
  },
  {
    title: "YouTube Automation System",
    description: "Built an automated YouTube management system that published 50+ videos across 10 channels, leading to a 100% increase in views and a 50% growth in subscribers. The system handles content generation, scheduling, and analytics tracking.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
    tags: ["Automation", "Content Management"],
    link: "#",
    github: "#",
    demo: "#"
  },
  {
    title: "Cinema Plus App",
    description: "Developed the Cinema Plus app, achieving over 50,000 downloads in the first 6 months and a 4.5-star rating on the Play Store. Enhanced user engagement by 40%, with daily active users increasing by 30% through an intuitive user interface and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
    tags: ["Flutter", "Mobile Development"],
    link: "#",
    github: "#",
    demo: "#"
  },
  {
    title: "AI-Based Sentiment Analysis Tool",
    description: "Developed a sentiment analysis tool leveraging NLP (Natural Language Processing) to analyze social media posts. Achieved 85% accuracy in sentiment classification and used insights to influence marketing strategies for clients, increasing customer acquisition by 30%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["NLP", "Data Analysis"],
    link: "#",
    github: "#",
    demo: "#"
  }
];

export const skillsData = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      {
        name: "Python",
        icon: <Code className="h-6 w-6 text-primary" />,
        proficiency: 95
      },
      {
        name: "JavaScript",
        icon: <CodepenIcon className="h-6 w-6 text-primary" />,
        proficiency: 90
      },
      {
        name: "Java",
        icon: <Terminal className="h-6 w-6 text-primary" />,
        proficiency: 85
      },
      {
        name: "Dart",
        icon: <Globe className="h-6 w-6 text-primary" />,
        proficiency: 80
      }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      {
        name: "ReactJS",
        icon: <CodepenIcon className="h-6 w-6 text-primary" />,
        proficiency: 90
      },
      {
        name: "Flutter",
        icon: <Globe className="h-6 w-6 text-primary" />,
        proficiency: 85
      },
      {
        name: "TensorFlow",
        icon: <Brain className="h-6 w-6 text-primary" />,
        proficiency: 95
      },
      {
        name: "Node.js",
        icon: <Server className="h-6 w-6 text-primary" />,
        proficiency: 80
      }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6 text-primary" />,
    skills: [
      {
        name: "NLP",
        icon: <Brain className="h-6 w-6 text-primary" />,
        proficiency: 90
      },
      {
        name: "Deep Learning",
        icon: <Brain className="h-6 w-6 text-primary" />,
        proficiency: 85
      },
      {
        name: "Data Analysis",
        icon: <Brain className="h-6 w-6 text-primary" />,
        proficiency: 90
      },
      {
        name: "AI Automation",
        icon: <Brain className="h-6 w-6 text-primary" />,
        proficiency: 95
      }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: [
      {
        name: "AWS",
        icon: <CloudCog className="h-6 w-6 text-primary" />,
        proficiency: 85
      },
      {
        name: "Git",
        icon: <GitBranch className="h-6 w-6 text-primary" />,
        proficiency: 90
      },
      {
        name: "Docker",
        icon: <Terminal className="h-6 w-6 text-primary" />,
        proficiency: 80
      },
      {
        name: "SQL/NoSQL",
        icon: <Database className="h-6 w-6 text-primary" />,
        proficiency: 85
      }
    ]
  }
];

export const certificationsData = [
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    icon: <Globe className="h-5 w-5 text-primary" />
  },
  {
    name: "Campaign Manager 360 Certification",
    issuer: "Google",
    icon: <Globe className="h-5 w-5 text-primary" />
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Coursera",
    icon: <Brain className="h-5 w-5 text-primary" />
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    icon: <Brain className="h-5 w-5 text-primary" />
  },
  {
    name: "AI For Everyone",
    issuer: "Coursera",
    icon: <Brain className="h-5 w-5 text-primary" />
  }
];
