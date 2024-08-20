import { Hero } from "@/components/pages/Home/Hero/Hero";
import { PrimaryButton } from "@/components/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/public/image/patient1.png"
import arrowIcon from "@/public/image/arrowIcon.svg"
import FAQ from "@/components/pages/Home/faq/Faq";
import { CommingSoon } from "@/components/pages/Home/comming-soon/CommingSoon";
import HorizontalScroll from "@/components/pages/Home/experience-slide/ExperienceSlide";
export default function Home() {


  const items = [
     {
      id: 1,
      quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name:"Chinedu Mercy",
      state:"Lagos, Nigeria"
     },
     {
      id: 2,
      quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name:"Chinedu Mercy",
      state:"Lagos, Nigeria"
     },
     {
      id: 3,
      quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name:"Chinedu Mercy",
      state:"Lagos, Nigeria"
     },
     {
      id: 4,
      quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name:"Chinedu Mercy",
      state:"Lagos, Nigeria"
     },
     {
      id: 5,
      quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      name:"Chinedu Mercy",
      state:"Lagos, Nigeria"
     },
    // Add more items
  ];
  
 
  

  const service = [
    {id:1,
      title:"Skilled Nursing Care ",
      link:"#"
    },
    {id:2,
      title:"Therapy Services ",
      link:"#"
    },
    {id:3,
      title:"Personal Care Assistance ",
      link:"#"
    },
    {id:4,
      title:"Companion Services",
      link:"#"
    },
    {id:5,
      title:"Transportation Services  ",
      link:"#"
    },
    {id:6,
      title:"House Keeping and Cleaning Services ",
      link:"#"
    },
  ]
  return (
    <main className="flex flex-col">
       <Hero />
       <main className="md:px-[80px] px-6 md:mt-12 flex flex-col md:gap-12 bg-gradient-to-r from-white via-[#E5FBFF] to-white md:py-[64px] py-6 " >
         <div className="text-center">
         <h2 className="md:text-[48px] font-medium leading-[64px] ">Crafted Care Services for Your Needs</h2>
         <p className="md:text-[20px]">Personalized to Perfection, Delivered with Compassion.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-24">
              {service.map((item) => (
                <div key={item.id} className="bg-white border-[1px] p-6 rounded-md shadow-md flex flex-col gap-12 ">
                      <h2 className="text-[24px] font-medium leading-[32px] pr-12 ">{item.title} </h2>
                      <button className="border-none bg-white text-[#736D6D] text-[14px] text-start flex items-center">See more <Image src={arrowIcon} alt="see-more" /></button>

                </div>
              ))}
         </div>
              <div className="flex justify-center items-center md:gap-12 gap-6 ">
                    <PrimaryButton label={'Schedule an Appointment'} link="https://teams.microsoft.com/l/message/19:4c4c24ea-8525-437b-b085-76b8e553a73a_900899a4-2dcc-4d51-a53b-64ddb0891390@unq.gbl.spaces/1723908544928?context=%7B%22contextType%22%3A%22chat%22%7D" color="bg-primary" />
                    <Link href="/" className="underline text-secondary text-[24px] leading-[32px]">See all Services</Link>
              </div>
       </main>
       {/* section three */}
       <main className="mt-12 service bg-red-950">
        <div className="md:px-[80px] overlay md:py-[80px] p-6 flex md:flex-row flex-col gap-12">
              <section className="md:w-1/2 w-full md:pr-12">
                <h2 className="text-[16px] font-medium text-[#00B9BD]">Excellent Service</h2>
                <p className="md:text-[48px] leading-[64px] font-medium text-white">
                Providing Outstanding Care Programs as a Licensed and Insured Provider in Maryland
                </p>
              </section>
              <section className="md:w-1/2 w-full flex flex-col gap-6">
                <p className="text-[16px] text-white">
                At Mindspot Health Care Services, we take pride in being licensed by the State of Maryland and insured. Our services include assisted living, companionship and recreation, personal assistant with daily living tasks, medication reminders, cooking, cleaning & laundry, transportation to doctor visits, grocery, church, help with bathing, and assistance with dressing and grooming.
                </p>
                <div className="w-full flex  justify-between md:gap-12 gap-6 text-white">
                    <section className="flex-col flex gap-6">
                        <h2 className="md:text-[24px] font-medium">Licensed Provider</h2>
                        <p className="md:text-[14px]">We are licensed by the State of Maryland and insured, ensuring the highest quality care.</p>
                    </section>
                    <section className="flex-col flex gap-6">
                        <h2 className="md:text-[24px] font-medium">Insured Provider</h2>
                        <p className="md:text-[14px]">As an insured provider, we prioritize the safety and well-being of our clients.</p>
                    </section>
                </div>
                <div>
                  <button className="px-[40px] py-[14px] bg-secondary rounded-lg border-none">Contact Us</button>
                </div>
              </section>
        </div>
       </main>
       {/* section Four */}
       <main className="mt-12 bg-gradient-to-r from-white via-lightOrange to-white ">
        <div className="md:px-[80px] md:py-[64px] p-6 flex md:flex-row flex-col md:gap-24 gap-6">
              <section className="md:w-1/2 w-full ">
                 <Image src={img1} alt="image" className="w-full h-[500px]" />
              </section>
              <section className="md:w-1/2  w-full flex flex-col justify-between text-neutral">
              <h1 className="text-[16px] font-medium leading-[28px] text-primary">Dedicated Service</h1>
              <h2 className="text-[48px] leading-[64px] font-medium">Our Commitment to Equal Opportunity and Inclusive Care</h2>
                <p className="text-[16px] ">
                At Mindspot Health Care Services, we are dedicated to providing exceptional care to all individuals, regardless of their race, age, ethnic background, sexual orientation, religion, or national origin. We believe in equal opportunity and strive to create an inclusive environment where everyone feels valued and respected.
                </p>
                <div className="w-full flex  justify-between md:gap-12 gap-6">
                    <section className="flex-col flex gap-6">
                        <h2 className="md:text-[24px] font-medium">Equal Opportunity</h2>
                        <p className="md:text-[14px]">We serve clients without regard for race, age, ethnic background, or sexual orientation.</p>
                    </section>
                    <section className="flex-col flex gap-6">
                        <h2 className="md:text-[24px] font-medium">Inclusive Care</h2>
                        <p className="md:text-[14px]">Our services are available to individuals of all backgrounds and identities.</p>
                    </section>
                </div>
              </section>
        </div>
       </main>
       {/* section five */}
       <main className="mt-12 p-6">
        <div className=" flex md:flex-row flex-col md:gap-12 gap-6 bg-primary rounded-[15px]">
                <section className="md:w-1/2 w-full flex flex-col gap-6 justify-center items-center p-12 border-[1px] border-r-white  text-[#E5E5E5]">
                    <h2 className="text-[#FCFCFC] text-[56px] font-semibold leading-[72px]">Why Choose Us</h2>
                    <div>
                    <p className="md:text-[40px] leading-[56px] font-medium ">Choose Us Because of Our </p>
                    <p className="md:text-[40px] leading-[56px] font-medium text-center">People! </p>
                    </div>
                    
                    <p className="text-[16px] leading-[24px]">The dedicated team at Mindspot Health Care Services is committed to ensuring your complete satisfaction. Our caregivers not only provide the comfort you need but also enrich your life and the lives of your loved ones.</p>
                    <PrimaryButton label="Find out more About Us" link="/" color="bg-secondary" />
                </section>
                <section className="md:w-1/2 w-full flex flex-col gap-6 justify-center items-center p-12 text-[#E5E5E5]">
                    <h2 className="text-[#FCFCFC] text-[56px] font-semibold leading-[72px]">Join Our Team</h2>
                    <div>
                    <p className="md:text-[40px] leading-[56px] font-medium ">The future of in-home care </p>
                    <p className="md:text-[40px] leading-[56px] font-medium text-center">starts with you. </p>
                    </div>
                    <p className="text-[16px] leading-[24px]">Mindspot Health Care Services is always looking for new people to hire  <br className="text-center" /> in our team. Would you like to be part of our company? Send your application online.</p>
                    <PrimaryButton label="Explore the Career options" link="/" color="bg-secondary" />
                </section>
        </div>
       </main>
       {/* Experience */}
       <main className="mt-12">
       <HorizontalScroll items={items} />;
       </main>
       <main className="mt-12">
         <CommingSoon />
       </main>
       {/* faq */}
       <main>
        <div className="flex flex-col md:gap-6 gap-6 md:p-24 p-6">
          <h2 className="md:text-[56px] text-[32px] leading-[72px] font-semibold text-neutral">Frequently Asked Questions</h2>
          <FAQ />
        </div>
       </main>
    </main>
  );
}
