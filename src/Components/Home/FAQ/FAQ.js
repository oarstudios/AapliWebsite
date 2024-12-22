import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I get started with your services?",
      answer: "To get started, you can contact us through our website, email, or phone. We'll schedule an initial consultation to understand your needs and discuss potential solutions.",
    },
    {
      question: "How do you manage projects?",
      answer: "We follow a structured project management approach, typically using Agile methodologies. This ensures regular communication, iterative progress, and flexibility to adapt to changes.",
    },
    {
      question: "How long does it take to complete a project?",
      answer: "The duration of a project depends on its complexity and scope. We provide an estimated timeline after understanding your requirements during the initial consultation.",
    },
    {
      question: "How much do your services cost?",
      answer: "The cost varies depending on the project scope, complexity, and specific requirements. We provide a detailed quote after the initial consultation and needs assessment.",
    },
    {
      question: "Can you redesign my existing website/application?",
      answer: "Certainly. We can revamp your existing website or application to improve its design, usability, and performance, ensuring it meets current industry standards and user expectations.",
    },
    {
      question: "Do you offer support and maintenance services?",
      answer: "Yes, we offer ongoing support and maintenance to ensure your systems remain up-to-date, secure, and efficient. This includes bug fixes, updates, and performance optimizations.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">We’ve got the answers.</h1>
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className="faq-footer">
        <p>
          Still have more questions? Contact our <a href="/help-center">help center</a>.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
