

import copy from "@/public/image/copyIcon.svg";
import frame from "@/public/image/frame.png";
import arrowIcon from "@/public/image/arrowIcon.svg";
import download from "@/public/image/downloadIcon.svg";
import { PrimaryButton } from "@/components/PrimaryButton";
import Image from "next/image";
export default function GetStarted(){



    return (
     <main className="flex flex-col gap-6 ">
      <main className="md:fit ">
        <div className="h-full  flex justify-center items-center ">
          <div className="flex flex-col gap-6  md:px-[80px] md:py-[80px] lg:mt-[5rem] mt-[2rem]  p-6 w-full ">
            <h2 className="md:w-[50%] w-full xl:text-[56px] md:text-[44px] text-[24px] text-[#2C2929] md:leading-[72px] font-semibold ">
            Choose the care you deserve 
            </h2>
            <div className="w-full h-[300px] p-6 bg-light ">
              <Image src={frame} className="h-full w-full" />
            </div>
            
              <p className="text-dark md:text-[32px] text-[24px] leading-[48px]">
              Starting your care with Mindspot Health Care Services is simple and straightforward. We're here to guide you every step of the way, making sure your transition into care is as smooth as possible. Contact us today and discover how we can make a positive difference in your life. 
              </p>
              <div className="flex items-center gap-6">
                <PrimaryButton label={"Download our Flyer"} link={"/"} icon={download} color={"bg-primary"} />
                <PrimaryButton label={"Book an Appointment"} link={"https://docs.google.com/forms/d/e/1FAIpQLSc0IgYpVjE3xLNS7bdbd1HN_cHx5o2Of1yfAXANgCVFC87p6g/viewform?embedded=true%22"} icon={arrowIcon} color={"bg-secondary"} />
              </div>
          </div>
        </div>
      </main>
 
    

      {/* sectio three */}

    </main>
    )
}