"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-6 w-auto"
    >
      {resolvedTheme === "dark" ? (
        <label className="text-white-300">Dark</label>
      ) : (
        <label className="text-black-950">Light</label>
      )}
    </Button>
  );
}
