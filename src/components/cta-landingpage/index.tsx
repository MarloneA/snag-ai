import { Section, Container } from "@/components/layout";
import { ArrowRight } from "lucide-react";
import { Button } from "../__ui/button";
import { Badge } from "../__ui/badge";

import Link from "next/link";

const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/#pricing">
            Snag AI is powered by Open AI
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">
          Our aim is to supercharge your youtube experience
        </h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          By Combining the power of youtube and AI insights we aim to make sure
          that you get the most out of your time and have an engaging youtube
          experience.
        </h3>

        <div className="flex gap-4">
          <Button>Get Started for free</Button>
          {/* <Button variant="outline">Checkout the code</Button> */}
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
