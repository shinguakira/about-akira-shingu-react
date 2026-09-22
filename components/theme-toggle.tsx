"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { useHasMounted } from "@/hooks/use-has-mounted";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  // The resolved theme is only known on the client, so render nothing until
  // hydration rather than risk a mismatch.
  if (!hasMounted) return null;

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
