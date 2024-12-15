import { EducationHistoryProps } from "./education-history";
const EducationItem: React.FC<EducationHistoryProps> = ({
  school,
  startYear,
  endYear,
  description,
}) => {
  return (
    <div className="overflow bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
          {school}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
          {startYear} - {endYear}
        </p>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <dl>
          <div className="bg-gray-50 px-4 py-5 dark:bg-gray-700 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Description
            </dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
              {description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default EducationItem;
