import React from 'react';

type CommingSoonProps = {
  label?: string // label for comming soon
};

const CommingSoon:React.FC<CommingSoonProps> = ({ label }) => {
  return (
    <div className="bg-white dark:bg-gray-800 mx-auto relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0  opacity-50"></div>
      <div className="relative text-center p-8  bg-opacity-90 shadow-lg rounded-lg max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">{label} Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default CommingSoon;