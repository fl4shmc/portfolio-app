import { techCloud, techStack } from "@/lib/content";
import { cn } from "@/lib/utils";

// Maps a skill's relative weight (1–5) to a Tailwind font-size scale.
// Keeping this declarative makes the visual hierarchy easy to tune in one place.
const weightToSize: Record<number, string> = {
  1: "text-base sm:text-lg",
  2: "text-xl sm:text-2xl",
  3: "text-2xl sm:text-4xl",
  4: "text-4xl sm:text-5xl",
  5: "text-5xl sm:text-7xl"
};

// Deterministic pseudo-random in [0, 1) from an integer seed. Keeps the scatter
// stable across renders (no hydration drift) while still looking organic.
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// Derives a per-word vertical drift plus varied horizontal spacing so the words
// read as an organic, scattered cloud rather than tidy rows, while staying
// perfectly horizontal. Applied to the wrapper so it never conflicts with the
// hover `scale` transform on the word itself.
function scatterStyle(index: number): React.CSSProperties {
  const translateY = (seededRandom(index) - 0.5) * 72; // ~ -36px .. 36px
  const marginX = seededRandom(index + 50) * 22; // 0px .. 22px extra spacing
  return {
    transform: `translateY(${translateY}px)`,
    marginInline: `${marginX}px`
  };
}

export function TechCloud() {
  return (
    <section id="stack" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Tech stack</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {techCloud.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            {techCloud.description}
          </p>
        </div>

        <ul className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {techStack.map((skill, index) => (
            <li key={skill.name} style={scatterStyle(index)}>
              <span
                className={cn(
                  "inline-block cursor-default font-heading font-semibold tracking-tight text-muted-foreground",
                  "transition-[scale,color] delay-150 duration-500 ease-in-out",
                  "hover:scale-125 hover:text-foreground",
                  "motion-reduce:transition-none motion-reduce:hover:scale-100",
                  weightToSize[skill.weight]
                )}
              >
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
