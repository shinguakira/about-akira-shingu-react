import React from "react";

type CommingSoonProps = {
  label?: string; // label for comming soon
};

const CommingSoon: React.FC<CommingSoonProps> = ({ label }) => {
  return (
    <div
      className="relative mx-auto flex items-center justify-center bg-white bg-cover bg-center dark:bg-gray-800"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative mx-auto max-w-md rounded-lg bg-opacity-90 p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold">{label} Coming Soon</h1>
        <p className="mb-6 text-gray-600">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default CommingSoon;
