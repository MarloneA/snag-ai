import * as Craft from "@/components/layout";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../__ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Can I use Snag Ai for free?",
    answer:
      "Yes you can use snag Ai for free but it is limited to the number of summaries you can do.",
    link: "https://google.com",
  },
  {
    question: "Can i export my video summaries?",
    answer:
      "Yes you can export in pdf format the responses to all your AI requests.",
  },
  {
    question: "How do I cancel, change plans, or change credit cards?",
    answer:
      "You can manage your subscription from the Manage Subscription section found in the main app menu.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, if you are not satisfied with our product within the first 30 days, we will refund you.",
  },
];

const FAQ = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="mt-4 md:mt-8 not-prose flex flex-col gap-4">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="hover:bg-muted/50 transition-all border px-4 bg-muted/20 rounded-md"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="opacity-60 w-full mt-2 hover:opacity-100 transition-all flex items-center"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FAQ;
