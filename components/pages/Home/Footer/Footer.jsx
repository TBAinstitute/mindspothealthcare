import React from "react";
import Image from "next/image";
import Logo from "@/public/image/Logo.png";
import phoneIcon from "@/public/image/phoneIcon.svg";
import addressIcon from "@/public/image/addressIcon.svg";
import emailIcon from "@/public/image/emailIcon.svg";
import { footerData } from "./footerData";
import { PrimaryButton } from "@/components/PrimaryButton";
import { socials } from "./footerData";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" mt-12 text-neutral bg-[#FCFCFC]">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 md:px-[64px] md:py-[80px] px-6 py-12 ">
        <div className="flex flex-col justify-between w-full text-[12px] md:text-[14px]">
          <Link href="/" className="">
            <Image
              src={Logo}
              alt="logo"
              className="md:h-[56px] md:w-[176px] h-[40px] w-[120px]"
            />
          </Link>

          <div className="flex gap-4 flex-col ">
            <div className="flex gap-4 items-center ">
              <Image src={addressIcon} alt="" />
              <span>1445 Langford Road, Gwynn Oak, Maryland 21207.</span>
            </div>
            <div className="flex gap-4 items-center ">
              <Image src={emailIcon} alt="" />
              <a href="info@mindspothealthcare.com">
                info@mindspothealthcare.com
              </a>
            </div>
            <div className="flex gap-4 items-center ">
              <Image src={phoneIcon} alt="" />
              <a href="+1 (410) 961-0151"> +1 (410) 961-0151</a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid  md:grid-cols-2 grid-cols-1 gap-6 w-full  ">
            {footerData.map((data, id) => (
              <div className="flex flex-col gap-8" key={id}>
                <h1 className="font-semibold md:text-[16px] text-[14px] ">
                  {data.label}
                </h1>
                <ul className="flex gap-4 flex-col font-normal md:text-[14px] text-[12px]">
                  {data.children &&
                    data.children.map((child, id) => (
                      <li className="" key={id}>
                        <a
                          href={child.link}
                          className="no-underline hover:underline"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* newsletter */}
        <div className="flex flex-col gap-8 text-neutral">
          <h1 className="font-semibold md:text-[16px] text-[14px] ">
            Subscribe
          </h1>
          <p className="text-[14px]">
            Join our newsletter to stay up to date with our services and
            resources.
          </p>
          <div className="flex w-full gap-6">
            <input
              type="text"
              className="w-full border-[1px] border-primary px-6 bg-transparent text-neutral rounded-lg  "
              placeholder="Enter your email"
            />
            <div className="w-fit">
              <PrimaryButton
                label={"Subscribe"}
                color={"bg-primary"}
                link={"https://docs.google.com/forms/d/e/1FAIpQLSe__UZ7FcSLRXFj7jliEk5ZAhY9w1skmkEDyAum7wOtCK_YQw/viewform?embedded=true%22"}
              />
            </div>
          </div>
          <p className="text-[12px]">
            By subscribing you agree to with our{" "}
            <span>
              <a href="#" className="underline text-[12px]">
                Privacy Policy{" "}
              </a>
            </span>
            and provide consent to receive updates from our company.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col  items-center md:justify-between pt-6 border-t-[1px] border-t-gray-300 md:px-[64px]  px-6 py-12">
        <div className="flex md:flex-row flex-col gap-6 items-center md:text-[14px]">
          <p>Copyright @ Mindspot Healthcare Agency 2024</p>
          <ul className="flex gap-4  font-normal md:text-[14px]  text-[10px]">
            <li className="underline text-secondary">
              <a href="#" className="no-underline hover:underline  md:text-[14px]  text-[10px]">
                Privacy Policy
              </a>
            </li>
            <li className="underline text-secondary">
              <a href="#" className="no-underline hover:underline  md:text-[14px]  text-[10px]">
              Image Attributions
              </a>
            </li>
            <li className="underline text-secondary">
              <a href="#" className="no-underline hover:underline  md:text-[14px]  text-[10px]">
              Terms of Service
              </a>
            </li>
            <li className="underline text-secondary">
              <a href="#" className="no-underline hover:underline  md:text-[14px]  text-[10px]">
              Cookies Settings
              </a>
            </li>
          </ul>
        </div>
        <div>
        <ul className="flex md:gap-4 gap-2 items-center">
          {
            socials.map((item)=>(
                <li className="" key={item.id}>
                <a href={item.link}>
                  <Image src={item.img} alt="socials-icon"  />
                </a>
              </li>
            ))
          }
  
          </ul>
        </div>
      </div>
    </footer>
  );
};
