import React from "react";

interface AnimatedTextProps {
  text: string; // text to animate
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center">
      <h1
        className={`text-dark inline-block w-full text-8xl font-bold capitalize ${className}`}
      >
        {text.split(" ").map((word: string, index: number) => (
          <span key={word + "-" + index} className="inline-block">
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
