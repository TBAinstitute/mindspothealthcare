"use client"
import React, { useState } from 'react';
import addIcon from "@/public/image/addIcon.svg"
import Image from 'next/image';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data stored in an array
  const faqData = [
    {
      question: "What kind of care do you provide? ",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "How do I schedule a home care visit? ",
      answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML."
    },
    {
      question: "What qualifications do your caregivers have?",
      answer: "Components are the building blocks of a React application's UI."
    },
    {
      question: "How much does home care cost?",
      answer: "State is a way to store information that can change over time in a React component."
    },
    {
      question: "Do you offer respite care?",
      answer: "State is a way to store information that can change over time in a React component."
    },
    {
      question: "How do you handle emergencies?",
      answer: "State is a way to store information that can change over time in a React component."
    },
    {
      question: "Can I visit my loved one during their care?",
      answer: "State is a way to store information that can change over time in a React component."
    },
    {
      question: "How often can I expect to receive updates on my loved one’s care?",
      answer: "State is a way to store information that can change over time in a React component."
    },
    {
      question: "What is your cancellation policy?",
      answer: "State is a way to store information that can change over time in a React component."
    }
  ];

  // Toggle active index for showing/hiding the answer
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-14">
        <div onClick={() => handleToggle(index)} className='flex  items-center justify-between' >
        <h3 className="text-center md:text-[24px] font-medium leading-[32px] text-neutral w-full">
            {faq.question}
        </h3>
        <Image src={addIcon}  alt='faq-icon'/>
        </div>
          {activeIndex === index && (
            <p className="faq-answer text-center">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
