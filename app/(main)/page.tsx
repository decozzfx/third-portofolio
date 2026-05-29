"use client";

import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/sections/hero";
import { SectionEyebrow } from "@/components/common/section-eyebrow";
import { Studio } from "@/components/sections/studio";
import { Partnerships } from "@/components/sections/partnerships";
import { WorksList } from "@/components/sections/works-list";
import { HowIWork } from "@/components/sections/how-i-work";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { getFeaturedWorks } from "@/lib/works";

export default function HomePage() {
  const featured = getFeaturedWorks().slice(0, 4);

  return (
    <>
      <Hero />

      <Reveal full>
        <Studio />
      </Reveal>

      <Reveal full>
        <Partnerships />
      </Reveal>

      <Reveal full>
        <Box as="section" py="6rem">
          <SectionEyebrow num="04" label="Selected Work" />
          <WorksList works={featured} />
        </Box>
      </Reveal>

      <Reveal full>
        <HowIWork />
      </Reveal>

      <Reveal full>
        <ContactCTA />
      </Reveal>
    </>
  );
}
