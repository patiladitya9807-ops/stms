import { useCallback, useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const INSTALL_PROMPT_SHOWN_KEY = "install-prompt-shown";

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if prompt was already shown
    const wasShown = localStorage.getItem(INSTALL_PROMPT_SHOWN_KEY) === "true";
    setHasShown(wasShown);
  }, []);

  useEffect(() => {
    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
    };
  }, []);

  const handleInstall = useCallback(async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      // Mark as shown
      localStorage.setItem(INSTALL_PROMPT_SHOWN_KEY, "true");
      setHasShown(true);
    }
  }, [deferredPrompt]);

  const resetPromptOnce = useCallback(() => {
    localStorage.removeItem(INSTALL_PROMPT_SHOWN_KEY);
    setHasShown(false);
  }, []);

  return {
    deferredPrompt: deferredPrompt && !hasShown ? deferredPrompt : null,
    handleInstall,
    canInstall: !!deferredPrompt,
    resetPromptOnce,
  };
}
