import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { TechCloud } from "@/components/sections/tech-cloud";
import { RemoteReady } from "@/components/sections/remote-ready";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TechCloud />
        {/* Below component is to be replaced with my personal projects */}
        {/* <CaseStudies /> */}
        <RemoteReady />
      </main>
      <SiteFooter />
    </>
  );
}
