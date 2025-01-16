import React, { useState } from "react";

export const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-blue-700 mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold  text-blue-700">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          {faqItems.map((item, index) => (
            <li key={index}>
              <button
                className={`relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10  hover:text-[#5686f5] ${
                  activeIndex === index ? "text-[#5686f5]" : "text-blue-700"
                }`}
                aria-expanded={activeIndex === index}
                onClick={() => toggleAnswer(index)}
              >
                <span className="flex-1">{item.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="origin-center"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="origin-center rotate-90"
                  ></rect>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 leading-relaxed">{item.answer}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// FAQ items array
const faqItems = [
  {
    question: "What is the point of this app?",
    answer: (
      <div>
        Helps you learn to separate the Fakes from the real works
        It shortens your concentration <br /> <br />
      </div>
    ),
  },
  {
    question: "Who is this app for?",
    answer: (
      <p>
        The application was created to learn to recognize ai from artists' works
        <br />

      </p>
    ),
  },

  {
    question: "Will this help me?",
    answer: (
      <p>
        with your attention to detail which will allow you to better appreciate art
        <br />
        <a href="/#top" className="link">
          Take a look for yourself
        </a>
        .
      </p>
    ),
  },
  {
    question: "How can I use the Human Ai?",
    answer: (
      <p>
        Download the mobile app to use. We have{" "}
        <a href="/#top" className="link">
          mobile apps
        </a>{" "}
        for Android (Google Play).
        <br />
        <br />
        Mobile application is still being developed with new functions, which will allow you not to be bored with it.{" "}
        here
      
        .
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div>
        Feel free to contact me by email: developerinu@gmail.com - Subject: Curiosity
        Quench
        <br />
        <br /> Or on Twitter:{" "}
        <a
          href="https://twitter.com/"
          className="link link-hover"
        >
          inu
        </a>{" "}
        or on Instagram:{" "}
        <a
          href="https://instagram.com/"
          className="link link-hover"
        >
          inu
        </a>
      </div>
    ),
  },
];
