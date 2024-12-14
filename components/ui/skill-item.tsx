type SkillItemProps = {
  name: string;
  category: string;
  years: string;
  proficyency?: string; // onBusiness or self-study
};

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  category,
  years,
  proficyency,
}) => {
  return (
    <>
      <div
        key={name}
        className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="inline-block text-xl font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>
        </div>
        <div className="relative pt-1">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 sm:inline-block">
                {category}
              </span>
              <span className="inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-semibold uppercase text-blue-600 dark:bg-blue-800 dark:text-blue-200">
                Proficiency
              </span>
              <span className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold uppercase text-green-600 dark:bg-green-800 dark:text-blue-200">
                {proficyency}
              </span>
            </div>
            <div className="text-right">
              {/* <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-200">
                    {level}%
                  </span> */}
            </div>
          </div>
          <label>{years}</label>
          {/* <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-800">
                <div 
                  style={{ width: `${level}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div> */}
        </div>
      </div>
    </>
  );
};

export default SkillItem;
export type { SkillItemProps };
