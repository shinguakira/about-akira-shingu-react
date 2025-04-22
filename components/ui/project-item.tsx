"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/constants/project";
import { useParams } from "next/navigation";

const tmpPic = "/public/images/profile/developer-pic-1.png";

const ProjectPage = () => {
  const params = useParams();
  const locale = params?.locale as string || "ja";
  
  return (
    <div className="mx-auto min-h-screen bg-gray-100 px-4 py-12 dark:bg-slate-500">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index: number) => {
            const localizedProject = locale === "en" ? project.en : project.ja;
            
            return (
              <div
                style={
                  {
                    "--border-width": 4,
                    "--animation-duration": "4s",
                  } as React.CSSProperties
                }
                key={index}
                className={`overflow-hidden rounded-lg border-4 bg-white shadow-lg ${index === 1 ? "animate-rainbow-border" : ""}`}
              >
                <Image
                  src={localizedProject.image ? localizedProject.image : tmpPic}
                  alt={localizedProject.title}
                  width={1200}
                  height={700}
                  className="w-full bg-black object-cover"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    {localizedProject.title}
                  </h2>
                  <pre className="mb-4 w-full whitespace-pre-wrap text-gray-600">
                    {localizedProject.description}
                  </pre>
                  <div className="mb-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {localizedProject.technologies.map((tech, index) => (
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
                    {localizedProject.githubUrl && (
                      <Link
                        href={localizedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <Github className="h-6 w-6" />
                        <span>GitHub Repository</span>
                      </Link>
                    )}{" "}
                    {localizedProject.liveUrl && (
                      <Link
                        href={localizedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <ExternalLink className="h-6 w-6" />
                        <span>Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
