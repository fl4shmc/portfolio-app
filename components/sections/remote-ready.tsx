import { ArrowUpRight } from "lucide-react";

import { profile, remotePillars, socialLinks } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function RemoteReady() {
  return (
    <section
      id="remote"
      className="scroll-mt-16 border-t border-border bg-muted/30"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Remote/On-site ready</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Seamless collaboration, anywhere.
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
          Thrives in distributed teams, combining independent ownership with clear, proactive communication.
          </p>
        </div>

        {/* <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border ring-1 ring-border sm:grid-cols-3">
          {remotePillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="flex flex-col gap-4 bg-card p-6">
                <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Icon className="size-4" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {pillar.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </ul>
              </div>
            )
          })}
        </div> */}

        <div
          id="contact"
          className="mt-12 flex scroll-mt-16 flex-col items-start justify-between gap-6 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="mt-2 text-white text-2xl">Say hello!</p>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  aria-label={link.label}
                  render={
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                    />
                  }
                >
                  <Icon />
                </Button>
              );
            })}
          </div>
          {/* <Button
            size="lg"
            className="h-11 shrink-0 px-5 text-base"
            render={<a href={`mailto:${profile.email}`} />}
          >
            {profile.email}
            <ArrowUpRight />
          </Button> */}
        </div>
      </div>
    </section>
  );
}
