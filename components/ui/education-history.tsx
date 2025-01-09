import { educationHistory } from "@/constants/education-history";
import EducationItem from "./education-item";

const EducationHistory: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 px-4 py-4 dark:bg-gray-900">
        <div className="mx-auto">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h1>
          <div className="space-y-6">
            {educationHistory.map((education, index) => (
              <EducationItem
                key={index}
                school={education.school}
                department={education.department}
                startYear={education.startYear}
                endYear={education.endYear}
                description={education.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationHistory;
