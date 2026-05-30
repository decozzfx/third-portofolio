import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { DisplayHeading } from "@/components/common/display-heading";
import { WorksGrid } from "@/components/sections/works-grid";
import { Reveal } from "@/components/motion/reveal";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Works",
  description: "Portfolio of projects by Moch Fathurrozi - Fullstack Developer",
};

export default function WorksPage() {
  const freelance = works.filter((w) => w.category === "freelance");
  const learning = works.filter((w) => w.category === "learning");
  return (
    <div style={{ paddingTop: "2rem" }}>
      <SectionEyebrow num="01" label="Selected Work / 2021 — 2026" />
      <DisplayHeading
        as="h1"
        text="What I've *built.*"
        style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", marginBottom: "2.5rem" }}
      />
      <Reveal>
        <WorksGrid works={freelance} />
      </Reveal>
      {learning.length > 0 && (
        <div style={{ marginTop: "4rem" }}>
          <SectionEyebrow num="02" label="Learning & experiments" />
          <Reveal>
            <WorksGrid works={learning} />
          </Reveal>
        </div>
      )}
    </div>
  );
}
