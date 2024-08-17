"use client";
import { useRef,useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Logo from "@/public/image/Logo.png"
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { navList } from "./navbarList";
import Image from "next/image";

export const Navbar = ({ showDrops }) => {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && animationParent(parent.current);
  }, [parent]);

  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div>

      <div className="flex  bg-[#F5FEFF] w-full md:px-12  px-6 justify-between items-center fixed z-[9999] top-0 py-5 text-sm">
        {/* left side */}
        <section>
          <Link href="/" className="max-w-28 ">
            <Image src={Logo} alt="logo" className="md:h-[56px] md:w-[176px] h-[40px] w-[120px]" />
          </Link>
        </section>
        {/* middle side  */}
        <section ref={animationParent} className="flex items-center gap-10">
          {isSideMenuOpen && (
            <MobileNav closeSideMenu={closeSideMenu} showDrops={showDrops} />
          )}
          <div className="hidden lg:flex md:hidden items-center gap-4 transition-all">
            {navList.map((d, i) => (
              <div
                key={i}
                className="relative group  px-2 py-3 transition-all "
              >
                <p className="flex cursor-pointer items-center gap-2 text-primary font-medium hover:bg-[#E5FBFF] transition-all p-2 rounded-md  text-[16px] group-hover:text-primary ">
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                  )}
                </p>

                {/* dropdown */}
                {d.children && (
                  <div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="absolute   right-1  top-12 hidden w-auto  flex-col gap-1    rounded-lg bg-gray-100 p-4 border-[1px] border-gray-300 shadow-md  transition-all group-hover:flex "
                  >
                    {d.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        // target="_blank"
                        className=" flex cursor-pointer items-center  py-1 px-1  text-neutral font-medium hover:bg-[#E5FBFF] rounded-md  "
                      >
                        {/* item */}
                        <span className="whitespace-nowrap   pl-3 ">
                          {ch.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* navitems */}
        </section>
        {/* right side data */}
        <section className=" hidden md:hidden lg:flex  ">
          <button className=" rounded-lg px-[24px] py-[10px] bg-primary text-[#fff] transition-all ">
          Book an Appointment
          </button>
          
        </section>

        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-[#13162D]  text-4xl lg:hidden md:block block"
        />
      </div>
    </div>
  );
};

function MobileNav({ closeSideMenu, isSideMenuOpen, showDrops }) {
  return (
    <div className="fixed right-0 top-0 text-primary   h-screen z-[9999]   md:w-[400px] w-full  bg-white lg:hidden md:block block">
   
        <div className="  w-full   px-4 py-4">
          <section className="flex justify-end">
            <AiOutlineClose
              onClick={closeSideMenu}
              className="cursor-pointer text-black text-4xl "
            />
          </section>
          <div className=" flex flex-col text-xl font-bold pt-12 text-[#13162D]  gap-2 transition-all">
            {navList.map((d, i) => (
              <SingleNavItem key={i} label={d.label} link={d.link}>
                {d.children}
              </SingleNavItem>
            ))}
          </div>
          <section className=" ">
          <button className="h-fit rounded-lg px-[24px] py-[10px] bg-primary text-[#fff] transition-all ">
          Book an Appointment
          </button>
           </section>
        </div>
    </div>
  );
}

function SingleNavItem(d) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <div
      ref={animationParent}
      onClick={toggleItem}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-[#13162D]  group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              to={ch.link ?? "#"}
              target="_blank"
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-[#13162D]  hover:text-black  "
            >
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
