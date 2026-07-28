import { ArrowUpRight } from "lucide-react";

import { caseStudies, type CaseStudy } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <article className="grid gap-8 border-t border-border py-14 first:border-t-0 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <span className="eyebrow font-mono-tabular">{study.index}</span>
        <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {study.title}
        </h3>
        <p className="mt-3 text-muted-foreground text-balance">
          {study.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {study.links.map((link) => (
            <Button
              key={link.label}
              variant="link"
              size="sm"
              className="h-auto px-0"
              render={
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                />
              }
            >
              {link.label}
              <ArrowUpRight />
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <p className="eyebrow">Problem</p>
          <p className="mt-2 leading-relaxed text-foreground/90">
            {study.problem}
          </p>
        </div>
        <div>
          <p className="eyebrow">Solution</p>
          <p className="mt-2 leading-relaxed text-foreground/90">
            {study.solution}
          </p>
        </div>
        <div>
          <p className="eyebrow">Impact</p>
          <ul className="mt-3 space-y-2">
            {study.impact.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 h-px w-4 shrink-0 bg-foreground/40"
                />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-5xl scroll-mt-16 px-6 py-20"
    >
      <div className="max-w-2xl">
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Case studies, not a repository dump.
        </h2>
        <p className="mt-4 text-muted-foreground text-balance">
          A few projects where the problem, the trade-offs, and the measurable
          outcome mattered most.
        </p>
      </div>

      <div className="mt-10">
        {caseStudies.map((study) => (
          <CaseStudyBlock key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
