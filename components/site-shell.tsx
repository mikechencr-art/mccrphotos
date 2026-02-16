import { ReactNode } from "react";
import { LeftRail } from "@/components/left-rail";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <LeftRail />
      <main className="px-6 pb-12 pt-8 lg:ml-[290px] lg:px-12 lg:pb-20 lg:pt-12">{children}</main>
    </div>
  );
}
