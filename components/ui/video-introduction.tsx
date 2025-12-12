"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";

// Custom Button component
const Button = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => (
  <button
    className={`rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Custom Slider component
const Slider = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) => (
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={(e) => onChange(parseFloat(e.target.value))}
    className="w-full"
  />
);

export default function VideoIntroduction() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    }
  };

  const handleSeek = (value: number) => {
    if (videoRef.current) {
      const time = (value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (!isNaN(time) && time >= 0 && time <= duration) {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        setCurrentTime(time);
        setProgress((time / duration) * 100);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleReset = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setProgress(0);
      setIsPlaying(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="p-6">
        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-gray-200">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() =>
              setDuration(videoRef.current?.duration || 0)
            }
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Button
            onClick={togglePlay}
            className="flex size-10 items-center justify-center rounded-full p-0"
          >
            {isPlaying ? (
              <Pause className="size-4" />
            ) : (
              <Play className="size-4" />
            )}
          </Button>
          <Slider value={progress} onChange={handleSeek} />
          <Button
            onClick={toggleMute}
            className="flex size-10 items-center justify-center rounded-full p-0"
          >
            {isMuted ? (
              <VolumeX className="size-4" />
            ) : (
              <Volume2 className="size-4" />
            )}
          </Button>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="number"
              value={currentTime.toFixed(2)}
              onChange={handleTimeInput}
              className="mr-2 w-20 rounded border px-2 py-1"
              step="0.01"
              min="0"
              max={duration}
            />
            <span className="text-sm text-gray-500">
              / {formatTime(duration)}
            </span>
          </div>
          <Button onClick={handleReset} className="flex items-center">
            <RotateCcw className="mr-2 size-4" />
            Reset
          </Button>
        </div>
        <h2 className="mb-2 text-2xl font-bold">My Self Introduction</h2>
        <p className="text-gray-600">
          Hello! I'm [Your Name], a [Your Profession] passionate about [Your
          Interests]. In this video, I'll share a bit about my background,
          skills, and what drives me in my career.
        </p>
      </div>
    </div>
  );
}
