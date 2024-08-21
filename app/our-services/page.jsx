"use client"
import { useState } from "react";
import { PrimaryButton } from "@/components/PrimaryButton";
import Image from "next/image";
import addIcon from "@/public/image/addIcon.svg";
export default function () {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const serviceData = [
    {
      id: 1,
      label: "Skilled Nursing Care",
      desc: "Our registered nurses (RNs) provide expert medical care and support in the comfort of your home. Services include:",
    },
    {
      id: 2,
      label: "Personal Care Assistance",
      desc: "Our compassionate caregivers provide assistance with daily living activities, promoting independence and dignity. Services include: ",
    },
    {
      id: 3,
      label: "Therapy Services",
      desc: "Our licensed therapists help you regain independence and improve your quality of life through specialized treatment plans. Services include: ",
    },
    {
      id: 4,
      label: "Companion Services",
      desc: "Our friendly companions offer companionship, support, and social interaction, helping to prevent isolation and loneliness. Services include: ",
    },
    {
      id: 5,
      label: "Transportation Services",
      desc: "Our friendly companions offer companionship, support, and social interaction, helping to prevent isolation and loneliness. Services include: ",
    },
    {
      id: 6,
      label: "Housekeeping and Cleaning Services",
      desc: "Our dedicated cleaning staff helps maintain a clean and safe living environment. Services include:",
    },
  ];

  // Toggle active index for showing/hiding the answer
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <main className="flex flex-col gap-6 ">
      <main className="md:h-screen ">
        <div className="h-full  flex justify-center items-center ">
          <div className="flex flex-col bg-light md:px-[80px] md:py-[80px] pt-[8rem]  p-6 w-full ">
            <h2 className="md:w-[65%] w-full md:text-[56px] text-[24px] text-[#2C2929] md:leading-[72px] font-semibold ">
              Caring with compassion, your way.
            </h2>
            <div className=" w-full">
              <p className="text-dark md:text-[32px] text-[24px] leading-[48px]">
                We are dedicated to enhancing the quality of life for our
                clients by delivering personalized, comprehensive home care
                services.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* section two */}
      <main className="bg-white -mt-[7rem]">
        <div className="flex flex-col gap-6 text-dark md:px-[80px] px-6 md:pb-[64px] py-6 ">
          <section className="flex w-full flex-col justify-center items-center">
            
            <h2 className="md:text-[28px] text-[24px] leading-[64px] text-[#151314]">
              Crafted Care Services for Your Needs
            </h2>
            <p className="md:text-[20px] text-[14px] leading-[32px]">
              Discover the driving force behind our company. Learn about our
              purpose and the core values that{" "}
            </p>
          </section>
          <section>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-12 gap-6 ">
              {serviceData.map((service, index) => (
                <div className="flex flex-col gap-6 bg-[#FCFCFC] rounded-lg px-[24px] py-[16px] " key={service.id}>
                  <h2 className="text-[#003740] md:text-[32px] text-[24px] font-medium">{service.label}</h2>
                  <div className="flex flex-col">
                    <div className=" flex w-full gap-4" onClick={handleToggle}>
                      <p className="md:text-[16px] text-dark">{service.desc}</p>
                      <Image src={addIcon} alt="faq-icon" />
                    </div>
                    {/* {activeIndex === index && (
                      <p className="faq-answer">{faq.answer}</p>
                    )} */}
                  </div>
                    <div className="w-full  ">
                    <PrimaryButton label={'Book Service'} color={'bg-primary'} link={'/'} />
                    </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* sectio three */}
      <main className="bg-lightOrange">
           <div className="flex flex-col md:px-[80px] px-6 md:py-[64px] py-6 gap-6">
           <h2>Our Service Category</h2>
           <p>Explore our budget friendly Service Category to find your best fit.</p>
           <div className="grid md:grid-cols-2 pt-6 grid-cols-1 md:gap-12 gap-6">
                <div className="flex flex-col px-[24px] py-6 gap-6 border-[1px] border-secondary bg-[#FCFCFC] text-[#003740] rounded-lg">
                    <h2 className="font-medium md:text-[48px] text-[24px] md:leading-[64px]">Live-In Care</h2>
                    <p className="text-[#443F3F] md:text-[18px]  ">
                    Mindspot Health Care Services offers round the clock monitoring and care, we offer 24 hours a day, 7 days a week Live-In care. 
                   
                    </p>
                    <p className="text-[#443F3F] md:text-[18px]  ">
                    Our caregivers will be available round the clock and ready to assist in all activities of daily living, morning, noon and night.
                    </p>
                    <PrimaryButton label={'Schedule an Appointment'} color={'bg-primary'} link={'https://docs.google.com/forms/d/e/1FAIpQLSc0IgYpVjE3xLNS7bdbd1HN_cHx5o2Of1yfAXANgCVFC87p6g/viewform?embedded=true%22'} />
                </div>
                <div className="flex flex-col px-[24px] py-6 md:justify-between md:gap-0 gap-6 border-[1px] border-secondary bg-[#FCFCFC] text-[#003740] rounded-lg">
                    <h2 className="font-medium md:text-[48px] text-[24px] md:leading-[64px]">Hourly Care</h2>
                    <p className="text-[#443F3F] md:text-[18px]  ">
                    Our hourly care ranges from 4 to 24 hours per day. 
                    Mindspot Health Care Services is only a call away for all. Let us help in taking care of your needs and your loved ones.
                    </p>
                    <PrimaryButton label={'Schedule an Appointment'} color={'bg-primary'} link={'https://docs.google.com/forms/d/e/1FAIpQLSc0IgYpVjE3xLNS7bdbd1HN_cHx5o2Of1yfAXANgCVFC87p6g/viewform?embedded=true%22'} />
                </div>
           </div>
           </div>

      </main>
    </main>
  );
}
