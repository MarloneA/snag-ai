import { Section, Container } from "../layout";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "../__ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { TypographyH2 } from "../_typography/h2";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <TypographyH2>Snag Ai</TypographyH2>
            </Link>
            <p>
              <Balancer>
                Snag Ai is currently available on the web and is coming soon to all mobile
                devices
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Home</Link>
            <Link href="/">Features</Link>
            <Link href="/">Pricing</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon />
            </Button>
            <Button variant="outline" size="icon">
              <TwitterLogoIcon />
            </Button>
            <Button variant="outline" size="icon">
              <EnvelopeClosedIcon />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © <a href="#">Saas kit</a>. All rights reserved. 2024.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
