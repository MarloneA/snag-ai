import NavBar from "@/components/navbar";
import { Button } from "@/components/__ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/__ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypographyH1 } from "@/components/_typography/h1";
import { TypographySmall } from "@/components/_typography/small";
import { TypographyP } from "@/components/_typography/p";
import { TypographyH2 } from "@/components/_typography/h2";
import Feature from "@/components/features";
import Hero from "@/components/cta-landingpage";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { Input } from "@/components/__ui/input";

export default async function Home() {
  return (
    <main>
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-8 ">
          <TypographySmall>Powered by Open AI</TypographySmall>
          <TypographyH1>Transform your youtube experience</TypographyH1>
          <TypographyP>
            Use AI to summarize YouTube videos and comments in one click.
          </TypographyP>
          <Link
            href="/dashboard"
            className="font-bold text-black p-4 rounded-md hover:text-black bg-white"
          >
            Get Started For Free
          </Link>
          <Input
            className="w-1/2 h-[6rem] text-center"
            placeholder="Paste a link to a youtube video here and watch it give you the summary of the video"
          />
        </div>
      </section>
      <section
        id="about"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <TypographyH2>Features</TypographyH2>
        <TypographyP>
          Snag Ai comes powered with the latest features from open ai to deliver
          you accurate and realtime results
          <br />
          {" you're"} not ready to commit you can get started for free.
        </TypographyP>
      </section>
      <Feature />

      <section
        id="pricing"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <TypographyH2>Choose your plan</TypographyH2>
        <TypographyP>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </TypographyP>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx("w-[300px] flex flex-col justify-between", {
              "border-2 border-primary": card.title === "Unlimited",
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-black border-orange border-2 p-2 w-full text-white text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <section
        id="faq"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <TypographyH2>Have any Questions?</TypographyH2>
        <TypographyP>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </TypographyP>
      </section>
      <FAQ />
      <Hero />
    </main>
  );
}
