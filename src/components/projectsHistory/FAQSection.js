import React from 'react';

const faqData = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We offer a range of services, including residential, commercial, and industrial construction projects, tailored to meet client needs.',
  },
  {
    id: 2,
    question: 'How long does it take to complete a project?',
    answer:
      'The project duration depends on the scale and complexity. Most projects are completed within 6 months to a year.',
  },
  {
    id: 3,
    question: 'What are your payment terms?',
    answer:
      'We offer flexible payment terms based on the project scope. Typically, payments are made in stages as milestones are achieved.',
  },
];

export default function FAQSection() {
  return (
    <section className="faq-section py-5 bg-body-tertiary">
      <div className="container">
        {/* Section Header */}

        <div className="text-start mb-4">
          <h1 className="display-10 text-sm-left text-capitalize fw-normal mb-2">
            Frequently Asked Questions
            <span className="line"></span>
          </h1>
          <p className=" display-8 font-sm fw-light">
            Find answers to some of the most common questions about our services
            and processes.
          </p>
        </div>
        {/* Accordion */}
        <div className="accordion" id="faqAccordion">
          {faqData.map((faq) => (
            <div className="accordion-item" key={faq.id}>
              <h2 className="accordion-header" id={`heading-${faq.id}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${faq.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse-${faq.id}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse-${faq.id}`}
                className={`accordion-collapse collapse ${
                  faq.id === 1 ? 'show' : ''
                }`}
                aria-labelledby={`heading-${faq.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
