"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { isActivePath } from "@/lib/utils";
import { SocialIcons } from "@/components/social-icons";

export function LeftRail() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <aside className="w-full border-b border-ink/10 bg-cream px-6 py-5 lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:w-[290px] lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
      <div className="flex items-center justify-between lg:block">
        <Link href="/grad" className="inline-flex transition-opacity hover:opacity-80" aria-label="Mike Chen Home">
          <Image src="/brand/logo.png" alt="Mike Chen logo" width={360} height={108} className="h-[84px] w-auto object-contain" priority />
        </Link>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="font-sans text-xs uppercase tracking-[0.16em] text-ink/70 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      <div className="mt-6 border-t border-ink/20 lg:mt-7" aria-hidden="true" />

      <nav
        id="mobile-nav"
        className={`${open ? "mt-6 block" : "hidden"} lg:mt-8 lg:block`}
        aria-label="Primary"
      >
        <ul className="space-y-3">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-sans text-xs uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-accent" : "text-ink/75 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-7 lg:absolute lg:bottom-9 lg:left-8 lg:right-8">
        <div className="mb-4 border-t border-ink/20" aria-hidden="true" />
        <SocialIcons compact />
      </div>
    </aside>
  );
}
