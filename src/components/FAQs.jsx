import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqBg1 from "../assets/media/faq-bg-1.png";
import faqBg2 from "../assets/media/faq-bg-2.png";

const faqs = [
  {
    id: "item-1",
    question: "How does URL shortening work?",
    answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
  },
  {
    id: "item-2",
    question: "Is it necessary to create an account to use the URL shortening service?",
    answer: "Yes, you can create custom branded links with Scissor's URL customization features."
  },
  {
    id: "item-3",
    question: "Are the shortened links permanent? Will they expire?",
    answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
  },
  {
    id: "item-4",
    question: "Are there any limitations on the number of URLs I can shorten?",
    answer: "Yes, you can create custom branded links with Scissor's URL customization features."
  },
  {
    id: "item-5",
    question: "Can I customize the shortened URLs to reflect my brand or content?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "item-6",
    question: "Can I track the performance of my shortened URLs?",
    answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
  },
  {
    id: "item-7",
    question: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
    answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
  },
  {
    id: "item-8",
    question: "What is a QR code and what can it do?",
    answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks."
  },
  {
    id: "item-9",
    question: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
    answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
  }
];

export default function FAQs() {
  return (
    <section className="FAQ relative">
      <img
        src={faqBg1}
        alt="background pattern"
        className="faqBg1 absolute top-0 left-0 w-auto h-[800px] -z-10"
      />
      <div className="faqs pt-20 pb-40 w-[60%] mx-auto z-10">
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <span className="candle"></span>
          <h2 className="text-[40px] font-bold">FAQs</h2>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="py-[20px]">
              <AccordionTrigger className="text-[20px] cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-[#333]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <img
        src={faqBg2}
        alt="background pattern"
        className="faqBg2 absolute bottom-0 right-0 h-[400px] -z-10"
      />
    </section>
  );
}