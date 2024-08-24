"use client"

import copy from "@/public/image/copyIcon.svg";
import copyArrow from "@/public/image/CopyArrow.svg";
import Image from "next/image";
export default function Resources(){
const resources = [
    {id:1,
        label:"Center for Medicare and Medicaid Services (CMS)",
        link:"https://www.cms.gov/"
    },
    {id:1,
        label:"Everyday Health -Online Health Information",
        link:"https://www.everydayhealth.com/"
    },
    {id:1,
        label:"U.S Department of Health and Human Services",
        link:"https://www.hhs.gov/"
    },
    {id:1,
        label:"National Association for Home Care and Hospice",
        link:"https://nahc.org/"
    },
    {id:1,
        label:"Mobility International USA",
        link:"https://www.miusa.org/"
    },
    {id:1,
        label:"CMarcy Transportation Services",
        link:"https://www.marcytransport.com/"
    },
]

const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      alert(`Link copied: ${link}`);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };


    return (
     <main className="flex flex-col gap-6 ">
      <main className=" ">
        <div className="h-full  flex justify-center items-center ">
          <div className="flex flex-col bg-lightOrange md:px-[80px] md:py-[80px] md:mt-[5rem] mt-[4rem]  p-6 w-full ">
            <h2 className="md:w-[65%] w-full md:text-[56px] text-[24px] text-[#2C2929] md:leading-[72px] font-semibold ">
            Helpful Resources Just for You
            </h2>
            <div className=" w-full">
              <p className="text-dark md:text-[32px] text-[24px] leading-[48px]">
              At Mindspot Health Care Services, we know that caring for yourself or a loved one can sometimes feel overwhelming. That’s why we’ve put together a collection of resources designed to support you every step of the way. Whether you need tips for daily living, advice on managing health, or just a bit of extra guidance, we’re here to help. 
              Look around and discover the helpful information we’ve gathered just for you. And remember, you’re never alone—We are always here to lend a helping hand.
              </p>
            </div>
          </div>
        </div>
      </main>
      <main className="">
        <div className="flex flex-col md:gap-6 gap-6 md:px-[80px] md:py-[64px] p-6">
         {
            resources.map((item,index)=>(
                <div key={index} className="flex flex-col gap-[32px] p-6 border-[#CECDCD] border-[1px] rounded-md  ">
                    <h2 className="font-custom font-medium md:text-[44px] md:leading-[44px]">{item.label}</h2>
                    <div className="flex gap-2 items-center">
                        <button onClick={()=> copyToClipboard(item.link)}><Image src={copy} alt="copy-icon" /></button>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#004853] font-custom font-medium md:text-[24px] flex items-center gap-2 underline" >{item.link} <Image src={copyArrow} alt="copy-arrow" /></a>

                    
                    </div>
                </div>
            ))
         }
        </div>
       </main>
    

      {/* sectio three */}

    </main>
    )
}