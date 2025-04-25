import React, { useState, useRef } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We serve a wide range of industries — from e-commerce and retail to education, media, and service-based businesses. Our focus is on crafting custom solutions tailored to the unique goals and audience of each brand.",
  },
  {
    question:
      "Can I request a customized service package instead of a standard one?",
    answer:
      "Absolutely. We believe every client is unique, so we offer tailored packages based on your specific needs, goals, and budget. Let’s discuss your vision, and we’ll create a solution that fits.",
  },
  {
    question: "How do you determine pricing for your projects?",
    answer:
      "Our pricing is based on the project scope, timeline, complexity, and the resources involved. After an initial consultation, we provide a transparent quote with no hidden fees. We also offer flexible payment plans for startups and small businesses.",
  },
  {
    question:
      "Do you offer any free consultations before committing to a service?",
    answer:
      "Yes! We provide a free 30-minute discovery session to understand your goals and recommend the best solutions. This helps us align on expectations before any commitment.",
  },
  {
    question: "How can I join AG Software as a creative or developer?",
    answer:
      "We’re always looking for passionate creatives and tech talents! Visit our Careers page or follow us on social media for current openings. You can also send your portfolio and resume to our email.",
  },
  {
    question: "Do you offer internship or mentorship programs?",
    answer:
      "Yes. Our Growth & Mentorship programs are designed to guide young talents in tech and design. We run seasonal internship programs and mentorship bootcamps, helping individuals build skills, gain experience, and connect with industry experts.",
  },
  {
    question: "How does AG Software support the creative community?",
    answer:
      "Through collaborative projects, skill-sharing sessions, workshops, and spotlight features. Our goal is to empower local talents, help them grow, and offer them real opportunities to shine in a professional space.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Typed ref array
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Helper to assign ref
  const setContentRef = (el: HTMLDivElement | null, index: number) => {
    contentRefs.current[index] = el;
  };

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="px-4 sm:px-6 md:px-16">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center space-y-5 mb-10">
        <h3 className=" text-white text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          FAQs
        </h3>
      </div>

      {/* FAQ List (One Column) */}
      <div className="w-full max-w-5xl mx-auto pb-30 grid grid-cols-1 gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentEl = contentRefs.current[index];

          return (
            <div
              key={index}
              className="rounded-md overflow-hidden backdrop-blur-sm bg-white/5 border border-gray-600/30 p-6 shadow-md space-y-3 transition hover:shadow-lg hover:bg-white/10"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-white text-md font-medium focus:outline-none"
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                <PlusIcon
                  className={`w-6 h-6 flex-shrink-0 text-gray-400 transform transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-white" : ""
                  }`}
                />
              </button>

              <div
                ref={(el) => setContentRef(el, index)}
                className="px-4 overflow-hidden transition-all duration-500 ease-in-out text-sm text-gray-300"
                style={{
                  maxHeight:
                    isOpen && contentEl ? `${contentEl.scrollHeight}px` : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="pb-4 pt-1">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
