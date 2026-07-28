import { ArrowUpRight, Globe } from "lucide-react";

import { profile } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="about-me"
      className="mx-auto w-full max-w-5xl px-6 pt-20 pb-24 sm:pt-28"
    >
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {profile.headline}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance sm:text-xl">
          {profile.subheadline}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            size="lg"
            className="h-11 px-5 text-base"
            render={<a href="#contact" />}
          >
            Let&apos;s connect
            <ArrowUpRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-5 text-base"
            render={<a href="#work" />}
          >
            View selected work
          </Button>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-10 sm:grid-cols-4">
          <div>
            <dt className="eyebrow">Based in</dt>
            <dd className="mt-1 text-sm font-medium">{profile.location}</dd>
          </div>
          <div>
            <dt className="eyebrow">Timezone</dt>
            <dd className="mt-1 font-mono-tabular text-sm font-medium">
              {profile.timezone}
            </dd>
          </div>
          <div>
            <dt className="eyebrow flex items-center gap-1">
              <Globe className="size-3" /> English
            </dt>
            <dd className="mt-1 text-sm font-medium">Professional</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
