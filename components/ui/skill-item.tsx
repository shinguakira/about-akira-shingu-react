type SkillItemProps = {
    name: string
    category: string
    years: string
}

const SkillItem:React.FC<SkillItemProps> = ({ name, category, years}) => {
    return(
        <>
        <div key={name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{category}</span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:text-blue-200 dark:bg-blue-800">
                    Proficiency
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
    )
}

export default SkillItem