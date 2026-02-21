import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaIcon?: React.ReactNode;
  onCtaClick?: () => void;
  faqs: FAQItem[];
}

function FAQ({
  badge = "FAQ",
  title = "Frequently Asked Questions",
  description = "Have questions? We have answers. Browse our most common inquiries below.",
  ctaText = "Any questions? Reach out",
  ctaIcon = <PhoneCall className="w-4 h-4" />,
  onCtaClick,
  faqs = [],
}: FAQProps) {
  return (
    <div className="w-full py-8 sm:py-12 lg:py-16 pb-4 sm:pb-6 lg:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="flex gap-6 sm:gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{badge}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-2xl sm:text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  {title}
                </h4>
                <p className="text-base sm:text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  {description}
                </p>
              </div>
              {ctaText && (
                <div className="">
                  <Button
                    className="gap-4 w-full sm:w-auto"
                    variant="outline"
                    onClick={onCtaClick}
                  >
                    {ctaText} {ctaIcon}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-left">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
