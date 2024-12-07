"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Brain, School, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";


export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-purple-500/5 to-primary/5">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Jacob Wilber
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            AI & Robotics Specialist | Software Engineer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button onClick={() => window.open("https://github.com/jacobwilbe", "_blank")} variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Github className="h-5 w-5" />
            </Button>
            <Button onClick={() => window.open("https://www.linkedin.com/in/jacobwilber/", "_blank")} variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button onClick={() => window.open("mailto:jacobwilber4@gmail.com", "_blank")} variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <Button
            variant="secondary"
            onClick={() => scrollToSection("about")}
            className="animate-bounce rounded-full"
          >
            <ChevronDown className="h-5 w-5 mr-2" />
            Explore
          </Button>
        </motion.div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            <Brain className="mr-2 text-primary" /> About Me
          </h2>
          <Card className="p-6 border-2 border-primary/10 hover:border-primary/20 transition-all">
            <p className="text-lg leading-relaxed">
              I&apos;m a Computer Science student at the University of Delaware with a deep passion for Machine Learning and AI. 
              Currently conducting research on Diffusion Models, specifically working with RFDiffusion for protein structure generation. 
              With hands-on experience in both ML systems and backend development, 
              I&apos;m seeking Backend Engineer and Machine Learning Engineering internship opportunities where I can apply my 
              experience in building AI driven applications and gain more experience with the latest ML technologies.
            </p>
          </Card>
        </section>

        {/* Experience & Projects */}
        <Tabs defaultValue="experience" className="mb-20">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="experience">
              <Briefcase className="mr-2" /> Experience
            </TabsTrigger>
            <TabsTrigger value="projects">
              <Code className="mr-2" /> Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="grid gap-6">
              <ExperienceCard
                title="Software Engineering Fellow"
                company="HeadStarter AI"
                period="July 2024 – Present"
                points={[
                  "Built 5+ AI apps using NextJS, OpenAI, Pinecone, StripeAPI",
                  "Developed projects from design to deployment leading 2+ engineering fellows",
                  "Coached by Amazon and Google engineers along with YC Start up founders"
                ]}
              />
              <ExperienceCard
                title="Undergraduate Teaching Assistant"
                company="University of Delaware"
                period="Aug. 2024 – Present"
                points={[
                  "Facilitate weekly lab sessions for Python programming",
                  "Hold regular office hours for one-on-one support",
                  "Assist in grading and developing course materials"
                ]}
              />
              <ExperienceCard
                title="Undergraduate Researcher"
                company="University of Delaware"
                period="September 2024 – Present"
                points={[
                  "Research on deep learning prediction networks",
                  "Analyzing RFDiffusion for protein structure generation",
                  "Testing on GPU clusters for computational evaluation"
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid gap-6">
              <ProjectCard
                title="Generative Flashcard SaaS"
                tech="NextJS, ReactJS, Clerk, Stripe, OpenAI, Firebase"
                description="AI-powered SaaS product generating flashcards from text and PDF"
                points={[
                  "Integrated Clerk authentication and Firebase storage",
                  "Implemented Stripe-based pricing tiers",
                  "Feature-rich flashcard generation system"
                ]}
                videoUrl="/videos/Screen Recording 2024-11-26 at 10.03.11 PM.mp4"
                githubUrl="https://github.com/jacobwilbe/flashcard-saas"
              />
              <ProjectCard
                title="RateMyProfessor RAG Chatbot"
                tech="NextJS, ReactJS, PineconeDB, OpenAI, Python"
                description="Intelligent chatbot for UD Computer Science faculty information"
                points={[
                  "Implemented vector database with Pinecone",
                  "Integrated OpenAI for context-aware responses",
                  "Used RAG for enhanced accuracy"
                ]}
                videoUrl="/videos/Screen Recording 2024-11-26 at 10.14.40 PM.mp4"
                githubUrl="https://github.com/jacobwilbe/rmp-rag-agent"
              />
              <ProjectCard
                title="Pantry.AI"
                tech="NextJS, ReactJS, OpenAI, Firebase"
                description="Smart inventory management system"
                points={[
                  "Integrated GPT Vision API for item classification",
                  "Implemented Firebase authentication",
                  "Real-time inventory tracking"
                ]}
                videoUrl="/videos/Screen Recording 2024-11-26 at 9.54.01 PM.mp4"
                githubUrl="https://github.com/jacobwilbe/inventory-management-app"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Education */}
        <section id="education" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            <School className="mr-2 text-primary" /> Education
          </h2>
          <Card className="p-6 border-2 border-primary/10 hover:border-primary/20 transition-all">
            <h3 className="text-xl font-bold mb-2">University of Delaware</h3>
            <p className="text-muted-foreground mb-4">
              Bachelor of Science in Computer Science, AI and Robotics
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-medium">GPA</p>
                <p className="text-muted-foreground">3.8/4.0</p>
              </div>
              <div>
                <p className="font-medium">Expected Graduation</p>
                <p className="text-muted-foreground">May 2026</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">Achievements</p>
              <p className="text-muted-foreground">Dean&apos;s List: Fall 2022 - Spring 2024</p>
            </div>
            <div>
              <p className="font-medium">Key Coursework</p>
              <p className="text-muted-foreground">
                Data Structures, Algorithms, Machine Learning, Parallel Computing,
                Software Engineering, Systems Programming
              </p>
            </div>
          </Card>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillCard
              title="Languages"
              skills={["Java", "Python", "C/C++", "TypeScript", "JavaScript", "HTML/CSS", "R", "Lua"]}
            />
            <SkillCard
              title="Frameworks & Tools"
              skills={["NextJS", "Node.js", "React", "AWS", "GCP", "Firebase", "Git", "Vercel", "Jupyter Notebook", "PineconeDB", "OpenAI", "Clerk", "Numpy", "Pandas", "PyTorch", "Scikit-learn"]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function ExperienceCard({ title, company, period, points }: {
  title: string;
  company: string;
  period: string;
  points: string[];
}) {
  return (
    <Card className="p-6 border-2 border-primary/10 hover:border-primary/20 transition-all">
      <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{title}</h3>
      <p className="text-muted-foreground mb-2">{company}</p>
      <p className="text-sm text-muted-foreground mb-4">{period}</p>
      <ul className="list-disc list-inside space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-muted-foreground">{point}</li>
        ))}
      </ul>
    </Card>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card className="p-6 border-2 border-primary/10 hover:border-primary/20 transition-all">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}