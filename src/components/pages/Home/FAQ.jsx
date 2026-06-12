import { useState } from "react";

const faqData = [
  {
    question: "Are there any special discounts or early bird offers?",
    answer:
      "Yes! We offer limited-time early bird discounts and bundle packages for group registrations. Be sure to sign up early to grab the best deals.",
  },
  {
    question: "What are the dates and locations for the product launch events?",
    answer:
      "The launch events will take place in New York on July 18th, San Francisco on July 25th, and virtually on August 1st.",
  },
  {
    question: "Can I bring a guest to the product launch?",
    answer:
      "Yes, you may bring one guest with you. Please ensure that both names are included during registration.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border">
      <div className="w-full mx-auto text-center mb-12">
        <h2 className="text-slate-900 text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="w-full mx-auto divide-y divide-slate-200">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-5">
              {/* Question */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full cursor-pointer flex justify-between items-center text-left font-semibold text-slate-900"
              >
                <span>{item.question}</span>

                <span
                  className={`text-xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer (SMOOTH CSS ANIMATION ONLY) */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}