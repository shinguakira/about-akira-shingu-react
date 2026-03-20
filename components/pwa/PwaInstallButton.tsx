"use client";

import { Download } from "lucide-react";
import { usePwaInstall } from "@/hooks/usePwaInstall";
import { Button } from "@/components/ui/button";

type PwaInstallButtonProps = {
  variant?: "icon" | "full";
  locale?: string;
};

export function PwaInstallButton({
  variant = "icon",
  locale = "en",
}: PwaInstallButtonProps) {
  const { canInstall, isInstalled, install } = usePwaInstall();

  if (isInstalled) return null;

  const handleClick = () => {
    if (canInstall) {
      install();
    }
  };

  const label = locale === "ja" ? "アプリをインストール" : "Install App";

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        title={label}
      >
        <Download className="size-5" />
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="flex items-center gap-2"
    >
      <Download className="size-4" />
      {label}
    </Button>
  );
}
