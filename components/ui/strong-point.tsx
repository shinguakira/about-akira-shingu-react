// "use client";

// import { Code, Palette, Zap, Users, Lightbulb, TrendingUp } from "lucide-react";
// import { strongPoints } from "@/constants";
// type StrongPointProps = {
//   name: string;
//   description: string;
//   icon: React.ReactNode;
//   keyPoints: string[];
// };

// const StrongPoint = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-3xl">
//         <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
//           アピールポイント
//         </h1>
//         <div className="space-y-6">
//           {strongPoints.map((strongPoint, index) => (
//             <div key={index} className="rounded-lg bg-white p-6 shadow-md">
//               <div className="mb-4 flex items-center">
//                 <div className="mr-4 rounded-full bg-blue-100 p-2">
//                   {strongPoint.icon}
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   {strongPoint.name}
//                 </h2>
//               </div>
//               <p className="mb-4 text-gray-600">{strongPoint.description}</p>
//               <ul className="list-disc space-y-1 pl-5">
//                 {strongPoint.keyPoints.map((point, pointIndex) => (
//                   <li key={pointIndex} className="text-gray-600">
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StrongPoint;
// export type { StrongPointProps };
