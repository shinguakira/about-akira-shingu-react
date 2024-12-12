import { Code, Palette, Zap, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Project } from "@/components/ui/project-item";
import { Faq } from "@/components/ui/accordion";
import { StrongPointProps } from "@/components/ui/strong-point";

export const onBusiness: string = "practical";
export const selfStudy: string = "self-study";

// skillset for Voice Of Customer Management System
export const VOCSkillSet: string[] = [
  "Typescript",
  "React",
  "Java",
  "Springboot",
  "MySQL",
  "Selenium(Python)",
  "Mybatis(Java ORM)",
  "axios",
  "Backlog",
  "アジャイル開発(スクラム)",
];
export const receptionInnovationSkillSet: string[] = [
  "Typescript",
  "React",
  "Node.js",
  "MySQL",
  "Selenium(Python)",
  "little state machine",
  "React Hook Form",
  "axios",
  "TypeORM",
  "class-validator",
  "Apollo Client Server(GraphQL)",
  "Bootstrap5",
  "Azure(App Service,Azure Functions)",
  "Backlog",
  "Redmine",
  "Swagger",
  "アジャイル開発(スクラム)",
];

// export const strongPoints: StrongPointProps[] = [
//   {
//     name: "Full-Stack Development",
//     description:
//       "Proficient in both front-end and back-end technologies, creating seamless, end-to-end solutions.",
//     icon: <Code className="h-6 w-6" />,
//     keyPoints: [
//       "Expertise in React and Node.js",
//       "Experience with RESTful APIs and GraphQL",
//       "Proficient in database design (SQL and NoSQL)",
//     ],
//   },
//   {
//     name: "UI/UX Design",
//     description:
//       "Crafting intuitive and visually appealing user interfaces that enhance user experience.",
//     icon: <Palette className="h-6 w-6" />,
//     keyPoints: [
//       "Skilled in creating responsive designs",
//       "Proficient with design tools like Figma",
//       "Focus on accessibility and user-centered design",
//     ],
//   },
//   {
//     name: "Performance Optimization",
//     description:
//       "Improving application speed and efficiency through advanced optimization techniques.",
//     icon: <Zap className="h-6 w-6" />,
//     keyPoints: [
//       "Expertise in front-end performance optimization",
//       "Experience with server-side rendering and code splitting",
//       "Proficient in database query optimization",
//     ],
//   },
//   {
//     name: "Team Collaboration",
//     description:
//       "Excellent communication and teamwork strongPoint, fostering productive development environments.",
//     icon: <Users className="h-6 w-6" />,
//     keyPoints: [
//       "Experience with Agile and Scrum methodologies",
//       "Skilled in code review and pair programming",
//       "Effective communication with technical and non-technical stakeholders",
//     ],
//   },
//   {
//     name: "Problem Solving",
//     description:
//       "Analytical thinker with a knack for finding innovative solutions to complex problems.",
//     icon: <Lightbulb className="h-6 w-6" />,
//     keyPoints: [
//       "Strong algorithmic and data structure knowledge",
//       "Experience in debugging complex systems",
//       "Ability to break down large problems into manageable tasks",
//     ],
//   },
//   {
//     name: "Continuous Learning",
//     description:
//       "Committed to staying updated with the latest technologies and industry best practices.",
//     icon: <TrendingUp className="h-6 w-6" />,
//     keyPoints: [
//       "Regular participation in online courses and workshops",
//       "Active contributor to open-source projects",
//       "Avid reader of tech blogs and industry publications",
//     ],
//   },
// ];
// Creadly link for certifications object should be defined as env variable
export const creadlyLink = "https://www.credly.com/users/username.aff80586";
