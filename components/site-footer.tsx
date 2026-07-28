import { profile, socialLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-heading text-base font-medium">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            {profile.location} · {profile.timezone}
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl px-6 pb-8">
        <p className="eyebrow">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
