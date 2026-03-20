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
  const { canInstall, isInstalled, isIOS, install } = usePwaInstall();

  if (isInstalled) return null;

  if (isIOS) {
    return null; // iOS requires manual "Add to Home Screen" — no button needed
  }

  if (!canInstall) return null;

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={install}
        title={locale === "ja" ? "アプリをインストール" : "Install App"}
      >
        <Download className="size-5" />
      </Button>
    );
  }

  return (
    <Button
      onClick={install}
      variant="outline"
      className="flex items-center gap-2"
    >
      <Download className="size-4" />
      {locale === "ja" ? "アプリをインストール" : "Install App"}
    </Button>
  );
}
