import { BottomNav } from "@/components/layout/bottom-nav";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { PageTransition } from "@/components/animation/page-transition";
import { InstallPrompt } from "@/components/pwa/install-prompt";
import { NetworkStatus } from "@/components/pwa/network-status";
import { PwaRegister } from "@/components/pwa/pwa-register";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <PwaRegister />
      <Navbar />
      <NetworkStatus />
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 pb-24 pt-6 sm:px-6 xl:px-8">
        <Sidebar />
        <main className="w-full">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>
      <InstallPrompt />
      <BottomNav />
    </div>
  );
}
