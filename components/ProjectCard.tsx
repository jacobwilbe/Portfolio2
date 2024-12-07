"use client";

import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  points: string[];
  videoUrl: string;
  githubUrl: string;
}

export function ProjectCard({ 
  title, 
  tech, 
  description, 
  points,
  videoUrl,
  githubUrl 
}: ProjectCardProps) {
  return (
    <Card className="p-6 border-2 border-primary/10 hover:border-primary/20 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{tech}</p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </DialogTrigger>
            <DialogContent aria-describedby="demo-video" className="max-w-4xl w-[90vw]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  {title} Demo
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full">
                <video
                  src={videoUrl}
                  className="w-full h-full rounded-lg border"
                  controls
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/20 hover:border-primary"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        </div>
      </div>
      <p className="mb-4">{description}</p>
      <ul className="list-disc list-inside space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-muted-foreground">{point}</li>
        ))}
      </ul>
    </Card>
  );
}