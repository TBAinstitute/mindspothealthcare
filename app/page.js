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
      Header: "Exceptional Care and Compassion",
      quote: "Mindspot Health Care Services has been a blessing for our family. When my mother needed in-home care after her surgery, the caregivers were not only professional but also incredibly kind and compassionate. They treated her like family, which gave us peace of mind knowing she was in good hands. I can't thank them enough for their exceptional service."    , 
      name:"— Sarah M. ",
      state:"Baltimore, MD"
     },
     {
      id: 2,
      Header: "Reliable and Trustworthy Support",
      quote:"After trying several home care agencies, we finally found Mindspot Health Care Services, and it’s been a game changer. The caregivers are reliable, always on time, and genuinely care about my father's well-being. The staff goes above and beyond to ensure that his needs are met, and they communicate with us every step of the way. I highly recommend them to anyone looking for trustworthy care.",
      name:"— James L.",
      state:"Annapolis, MD "
     },
     {
      id: 3,
      Header: "Personalized Care That Makes a Difference ",
      quote:"What sets Mindspot Health Care Services apart is their dedication to personalized care. My aunt has Alzheimer's, and they took the time to understand her specific needs and created a care plan that truly supports her. The caregivers are patient, attentive, and have made a real difference in her quality of life. We're grateful for the peace of mind they’ve provided our family",
      name:"— Karen T.",
      state:" Rockville, MD "
     },
     {
      id: 4,
      Header: "Responsive and Attentive Service",
      quote:"From the moment we contacted Mindspot Health Care Services, we knew we were in good hands. The team was responsive, attentive, and took the time to answer all our questions. The caregivers they provided for my uncle are wonderful—caring, skilled, and respectful. They’ve made it possible for him to stay in his home, where he’s happiest. We’re so grateful for their support",
      name:"— Michael W.,",
      state:"Silver Spring, MD"
     },
     {
      id: 5,
      Header: "A Lifesaver for Our Family ",
      quote:"Mindspot Health Care Services has truly been a lifesaver for our family. Balancing work and taking care of my elderly mother was becoming overwhelming until we found them. Their caregivers are not only professional but also warm and caring. They’ve given my mother the companionship she needs, and the rest of us the relief we were desperately seeking. We couldn't be more thankful.",
      name:"— Emily R.",
      state:"Columbia, MD"
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
         <h2 className="md:text-[48px] font-medium leading-[64px] font-custom ">Crafted Care Services for Your Needs</h2>
         <p className="md:text-[20px]">Personalized to Perfection, Delivered with Compassion.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-24">
              {service.map((item) => (
                <div key={item.id} className="bg-white border-[1px] p-6 rounded-md shadow-md flex flex-col gap-12 ">
                      <h2 className="text-[24px] font-medium leading-[32px] pr-12 font-custom ">{item.title} </h2>
                      <Link href="/our-services" className="border-none bg-white text-[#736D6D] text-[14px] text-start flex items-center">See more <Image src={arrowIcon} alt="see-more" /></Link>

                </div>
              ))}
         </div>
              <div className="flex justify-center items-center md:gap-12 gap-6 ">
                    <PrimaryButton label={'Schedule an Appointment'} link="https://docs.google.com/forms/d/e/1FAIpQLSc0IgYpVjE3xLNS7bdbd1HN_cHx5o2Of1yfAXANgCVFC87p6g/viewform?embedded=true%22" color="bg-primary" />
                    <Link href="/our-services" className="underline text-secondary text-[24px] leading-[32px]">See all Services</Link>
              </div>
       </main>
       {/* section three */}
       <main className="mt-12 service bg-red-950">
        <div className="md:px-[80px] overlay md:py-[80px] p-6 flex md:flex-row flex-col gap-12">
              <section className="md:w-1/2 w-full md:pr-12">
                <h2 className="text-[16px] font-medium text-[#00B9BD]">Excellent Service</h2>
                <p className="md:text-[48px] leading-[64px] font-medium text-white font-custom">
                Providing Outstanding Care Programs as a Licensed and Insured Provider in Maryland
                </p>
              </section>
              <section className="md:w-1/2 w-full flex flex-col gap-6">
                <p className="text-[16px] text-white">
                At Mindspot Health Care Services, we take pride in being licensed by the State of Maryland and insured. Our services include assisted living, companionship and recreation, personal assistant with daily living tasks, medication reminders, cooking, cleaning & laundry, transportation to doctor visits, grocery, church, help with bathing, and assistance with dressing and grooming.
                </p>
                <div className="w-full flex  justify-between md:gap-12 gap-6 text-white">
                    <section className="flex-col flex gap-6">
                        <h2 className="md:text-[24px] font-medium font-custom">Licensed Provider</h2>
                        <p className="md:text-[14px]">We are licensed by the State of Maryland and insured, ensuring the highest quality care.</p>
                    </section>
                    <section className="flex-col flex gap-6">
                        <h2 className="md:text-[24px] font-medium font-custom">Insured Provider</h2>
                        <p className="md:text-[14px]">As an insured provider, we prioritize the safety and well-being of our clients.</p>
                    </section>
                </div>
                <div className="flex" >
                  <div className="px-[80px] py-[8px] bg-secondary rounded-lg border-none">
                    <PrimaryButton link={"https://docs.google.com/forms/d/e/1FAIpQLSdd3cCZ1p4Kkq-njTKk76rY04y0JCDtFTZk20oWEALF8B568g/viewform?embedded=true%22"} label={"Contact Us"} />
                    </div>
                </div>
              </section>
        </div>
       </main>
       {/* section Four */}
       <main className="mt-12 bg-gradient-to-r from-white via-lightOrange to-white ">
        <div className="md:px-[80px] md:py-[64px] p-6 flex md:flex-row flex-col md:gap-24 gap-6">
              <section className="md:w-1/2 w-full ">
                 <Image src={img1} alt="image" className=" h-[500px]" />
              </section>
              <section className="md:w-1/2  w-full flex flex-col justify-between text-neutral">
              <h1 className="text-[16px] font-medium leading-[28px] text-primary">Dedicated Service</h1>
              <h2 className="text-[48px] leading-[64px] font-medium font-custom">Our Commitment to Equal Opportunity and Inclusive Care</h2>
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
                <section className="md:w-1/2 w-full flex flex-col gap-6 text-center px-8 py-12 border-[1px] border-r-white  text-[#E5E5E5]">
                    <h2 className="text-[#FCFCFC] text-[56px] font-semibold leading-[72px] font-custom">Why Choose Us</h2>
                    <div>
                    <p className="md:text-[40px] leading-[56px] font-medium font-custom ">Choose Us Because of Our People! </p>
                    </div>
                    
                    <p className="text-[16px] leading-[24px]">The dedicated team at Mindspot Health Care Services is committed to ensuring your complete satisfaction. Our caregivers not only provide the comfort you need but also enrich your life and the lives of your loved ones.</p>
                    <div className="flex justify-center items-center">
                    <div className="w-fit"><PrimaryButton label="Find out more About Us" link="/about-us" color="bg-secondary" /></div>
                    </div>
                </section>
                <section className="md:w-1/2 w-full flex flex-col gap-6 text-center px-8 py-12 text-[#E5E5E5]">
                    <h2 className="text-[#FCFCFC] text-[56px] font-semibold leading-[72px] font-custom">Join Our Team</h2>
                    <div>
                    <p className="md:text-[40px] leading-[56px] font-medium font-custom ">The future of in-home care starts with you. </p>
                    </div>
                    <p className="text-[16px] leading-[24px] ">Mindspot Health Care Services is always looking for new people to hire in our team. Would you like to be part of our company? Send your application online.</p>
                    <div className="flex justify-center items-center ">
                    <div className="w-fit"><PrimaryButton label="Explore the Career options" link="https://forms.gle/e9Y2AguecvuEixDb8" color="bg-secondary" /></div>
                    </div>
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
          <h2 className="text-center md:text-[56px] text-[32px] leading-[72px] font-semibold text-neutral font-custom">Frequently Asked Questions</h2>
          <FAQ />
        </div>
       </main>
    </main>
  );
}
