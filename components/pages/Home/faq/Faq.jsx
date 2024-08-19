"use client"
import React, { useState } from 'react';
import addIcon from "@/public/image/addIcon.svg"
import negativeIcon from "@/public/image/negativeIcon.svg"
import Image from 'next/image';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data stored in an array
  const faqData = [
    {
      question: "What kind of care do you provide? ",
      answer: "We offer a wide range of services tailored to your specific needs, including companionship, personal care, medication management, and skilled nursing. Whether you need full-time or part-time assistance, we have options to support your independence and well-being. "
    },
    { 
      question: "How do I choose the right level of care for my loved one? ",
      answer: "Our care coordinators will work closely with you to assess your loved one's needs and create a personalized care plan. We offer a variety of services, from companionship to skilled nursing, so you can choose the level of support that best fits your situation."
    },
    {
      question: "How do I schedule a home care visit? ",
      answer: "Getting started is easy! Simply give us a call or fill in the form to schedule a free in-home assessment. Our care coordinator will discuss your loved one's needs and create a customized care plan."
    },
    {
      question: "What qualifications do your caregivers have?",
      answer: "Our caregivers are carefully selected and undergo thorough background checks and training. We prioritize compassion, reliability, and expertise in providing the best possible care for our clients.."
    },
    {
      question: "How much does home care cost?",
      answer: "The cost of home care varies depending on the level of care needed and the number of hours of service. We work with various insurance providers and offer flexible payment options to accommodate your budget."
    },
    {
      question: "Do you offer respite care?",
      answer: "Many families caring for loved ones need breaks. We offer respite care services to provide temporary relief for caregivers, allowing them to recharge while ensuring their loved one receives quality care. Our hourly care services are available for as little as 4 hours a day or as much as 24 hours a day."
    },
    {
      question: "How do you handle emergencies?",
      answer: "We have procedures in place to handle emergencies. Our caregivers are trained in first aid and CPR, and we maintain 24/7 availability to address urgent situations."
    },
    {
      question: "Can I visit my loved one during their care?",
      answer: "Absolutely! We encourage family visits and involvement in the care plan. Our goal is to create a supportive environment for both the client and their loved ones."
    },
    {
      question: "How often can I expect to receive updates on my loved one's care?",
      answer: "We provide regular updates to family members about their loved one's well-being. We can also schedule regular check-ins to discuss care plans and address any concerns."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans can change. Our cancellation policy is designed to be flexible and fair to both clients and caregivers. We encourage you to contact us as soon as possible if you need to reschedule or cancel a visit."
    }
  ];

  // Toggle active index for showing/hiding the answer
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-10">
        <div onClick={() => handleToggle(index)} className='flex gap-4 items-center justify-between' >
        <h3 className="md:text-[24px]  font-medium transition-all leading-[32px] text-neutral">
            {faq.question}
        </h3>
        {
          activeIndex == index ? (<Image src={negativeIcon}  alt='faq-icon'/>):(<Image src={addIcon}  alt='faq-icon'/>)
        }
        </div>
          {activeIndex === index && (
            <p className="faq-answer text-[#736D6D] text-[16px] leading-[24px]">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
