"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

type BeforeInstallPromptEvent = Event & {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/** Nothing to subscribe to — the user agent does not change. */
const subscribeToNothing = () => () => {};

const detectIOS = () => {
  const ua = navigator.userAgent;
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [installedDuringSession, setInstalledDuringSession] = useState(false);

  // Running as an installed app and the user agent are both browser-only
  // values, read directly instead of copied into state by an effect.
  const isStandalone = useMediaQuery("(display-mode: standalone)");
  const isIOS = useSyncExternalStore(
    subscribeToNothing,
    detectIOS,
    () => false
  );
  const isInstalled = isStandalone || installedDuringSession;

  useEffect(() => {
    if (isStandalone) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const appInstalledHandler = () => {
      setInstalledDuringSession(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", appInstalledHandler);
    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", appInstalledHandler);
    };
  }, [isStandalone]);

  const install = useCallback(async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    if (outcome === "accepted") setInstalledDuringSession(true);
    return outcome === "accepted";
  }, [deferredPrompt]);

  return { canInstall: !!deferredPrompt, isInstalled, isIOS, install };
}
