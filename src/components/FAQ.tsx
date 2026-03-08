"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What can I expect in my first session?",
    answer:
      "Your first session is a chance for us to get to know each other. We'll discuss what brought you in, your goals, and any questions you have about the therapeutic process. It's a collaborative conversation — there's no pressure, and everything shared is confidential.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Please contact the office directly to discuss insurance coverage, fees, and payment options. We're committed to making quality psychological care accessible and can work with you to find a solution that fits your needs.",
  },
  {
    question: "How long are sessions and how often do we meet?",
    answer:
      "Individual therapy sessions are typically 50 minutes. We usually start with weekly sessions and adjust frequency as you progress. Evaluation sessions may be longer depending on the assessment needs.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Yes. Confidentiality is the foundation of our work together. What you share in session stays between us, with very limited exceptions required by law (such as imminent danger to yourself or others). We'll discuss these boundaries in detail during your first visit.",
  },
  {
    question: "Do you offer services specifically for First Responders?",
    answer:
      "Absolutely. Working with First Responders is a primary specialty. Dr. Barram understands the unique pressures, culture, and challenges of the job. Sessions are tailored to address issues like critical incident stress, cumulative trauma, work-life balance, and building long-term resilience.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can reach out through the contact form on this page, call the office, or send an email. We'll respond promptly to schedule an initial consultation at a time that works for you.",
  },
  {
    question: "Do you offer telehealth or virtual sessions?",
    answer:
      "Yes, telehealth sessions are available for clients who prefer the convenience of virtual appointments or who may have scheduling constraints. Please inquire about telehealth options when scheduling.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sage">
          FAQ
        </p>

        <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
          Frequently Asked
          <br /> Questions
        </h2>

        {/* Accordion */}
        <div className="mt-12 divide-y divide-warmgray">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-sage"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-lg font-medium text-charcoal">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center text-sage transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="leading-relaxed text-darktext/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
