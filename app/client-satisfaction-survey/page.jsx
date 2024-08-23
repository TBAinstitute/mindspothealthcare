"use client"

import write from "@/public/image/write.svg";
import { PrimaryButton } from "@/components/PrimaryButton";
export default function Resources(){

    return (
     <main className="flex flex-col gap-6 ">
      <main className=" ">
        <div className="h-full  flex justify-center items-center ">
          <div className="flex flex-col gap-6 bg-lightOrange md:px-[80px] md:py-[64px] md:mt-[6rem] mt-[4rem]  p-6 w-full ">
            <h2 className="md:w-[50%] w-full md:text-[56px] text-[24px] text-[#2C2929] md:leading-[72px] font-semibold ">
            Your Feedback Matters to Us
            </h2>
            
              <p className="text-dark md:text-[32px] text-[24px] leading-[48px]">
              By telling us about your experience, you help us continue to provide the high-quality care you deserve.
              </p>
              <p className="text-dark md:text-[32px] text-[24px] leading-[48px]">
              Click the button below to fill our Client Satisfaction Survey
              </p>
              <div className="w-fit">
              <PrimaryButton label={"Client Satisfaction Survey Form"} link={"https://docs.google.com/forms/d/e/1FAIpQLScaTC28NIXPOo5XBaZRMKrB0LlBiQXK8RNCg2bFe4ZJw9jCcA/viewform?embedded=true%22"} icon={write} color={"bg-primary"} />
              </div>
          </div>
        </div>
      </main>


      {/* sectio three */}

    </main>
    )
}