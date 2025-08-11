import React, { useState } from "react";

const faqs = [
  {
    question: "How can I become a volunteer?",
    answer:
      "You can easily sign up by creating an account on our website and browsing the available volunteering opportunities. Once you find a project you like, just click 'Join' and fill out the required details.",
  },
  {
    question: "What types of volunteering opportunities do you offer?",
    answer:
      "We offer a wide range of opportunities including community service, event assistance, teaching, fundraising, and more. Check the 'Volunteer Opportunities' page for current openings.",
  },
  {
    question: "Do I need any prior experience to volunteer?",
    answer:
      "No prior experience is required! We welcome volunteers of all backgrounds. Some roles may require specific skills, which will be clearly mentioned in the opportunity details.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Volunteering schedules are flexible. You can choose to volunteer for a few hours a week or during special events. We appreciate any time you can give.",
  },
  {
    question: "Can I volunteer remotely?",
    answer:
      "Yes! We offer some remote volunteering options like online mentoring and administrative support. Look for remote tags on opportunities.",
  },
  {
    question: "What safety measures are in place during volunteering?",
    answer:
      "Your safety is our priority. We follow all local health guidelines and provide necessary training and equipment to volunteers.",
  },
  {
    question: "How can I track my volunteering hours?",
    answer:
      "You can log your hours through your volunteer profile dashboard on our website. This helps you keep track of your contribution and can be useful for certifications.",
  },
  {
    question: "Who do I contact if I have questions or need help?",
    answer:
      "You can reach out to our volunteer coordinator via the 'Contact Us' page or email volunteer@ourorg.org.",
  },
];

const FAQSection = () => {
  // track which FAQ index is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-10 text-green-700">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-green-300 rounded-lg overflow-hidden bg-green-50"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center font-semibold text-green-900 text-lg md:text-xl focus:outline-none"
                aria-expanded={isOpen}
              >
                {question}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`px-5 overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${
                  isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                } text-green-800 text-base md:text-lg`}
              >
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
