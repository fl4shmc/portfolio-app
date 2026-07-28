"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { navLinks, profile } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight"
          aria-label={profile.name}
        >
          {profile.name}
          <span className="text-muted-foreground">.</span>
        </a>

        <nav className="flex items-center gap-1">
          <ul className="mr-1 hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
