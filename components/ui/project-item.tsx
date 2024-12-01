"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/constants";
import profilePic from "public/images/profile/developer-pic-1.png";

const tmpPic = "/public/images/profile/developer-pic-1.png";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

const ProjectPage = () => {
  return (
    <div className="mx-auto min-h-screen bg-gray-100 px-4 py-12 dark:bg-slate-500">
      <div className="max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-48 w-full bg-black object-cover"
              />
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="mb-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub Repository</span>
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    <ExternalLink className="h-6 w-6" />
                    <span className="sr-only">Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
export type { Project };
