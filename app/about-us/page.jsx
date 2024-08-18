import React from 'react'
import Image from 'next/image'
import AboutImg from "@/public/image/image1.png";
import commitment from "@/public/image/commitment.png";
import why from "@/public/image/why-choose.png";
import { OurStory } from '@/components/pages/About/Our-story';

export default function AboutUs (){
  return (
    <main className=' flex-col flex gap-12'>
      {/* section 1 */}
        <main className='md:h-screen '>
          <div className='h-full  flex justify-center items-center '>
          <div className='flex md:flex-row     flex-col md:gap-12 gap-6 md:px-[80px] py-6  px-6   '>
                  <section className='flex flex-col gap-6 md:w-1/2 w-full'>
                      <h2 className='font-medium md:text-[24px] text-[16px] text-secondary leading-[32px]'>About Mindspot</h2>
                      <h3 className='md:text[40px] text-[24px] text-[#151314] md:leading-[56px]'>We believe that home is the foundation of well-being, and we are honored to be a trusted partner in our patients' healthcare journeys</h3>
                      <p className='md:text-[18px] text-[#443F3F]'>As your trusted partner in Maryland home healthcare, we are committed to providing compassionate, personalized care that empowers individuals to thrive in their own homes. 
                      We are a licensed and insured home care provider recognized by the State of Maryland. We take great pride in being part of the Maryland community and are dedicated to serving its residents with exceptional care programs. </p>
                  </section>
                  <section className="flex flex-col gap-6 md:w-1/2 w-full">
                      <Image src={AboutImg} alt='about-image' className=' md:max-h-[300px] w-full h-auto' />
                      <p className='md:text-[18px] text-[#443F3F]'>Our services, approved by the Maryland Department of Mental Hygiene, include assisted living, companionship, recreational activities, personal assistance with daily tasks, medication reminders, cooking, cleaning, laundry, transportation to appointments, grocery shopping, church visits, bathing assistance, and support with dressing and grooming. </p>
                  </section>
            </div>
          </div>
        </main>
        {/* section 2 */}
        <main className="bg-light">
          <div className="flex md:flex-row flex-col items-center md:px-[80px] md:py-[64px]  p-6 w-full ">
            <h2 className='md:w-1/2 w-full md:text-[80px] text-[24px] text-[#2C2929] md:leading-[96px] font-semibold '>Our Mission</h2>
            <div className='md:w-1/2 w-full'>
              <p className='text-dark md:text-[32px] text-[24px] leading-[48px]'>
              We are dedicated to enhancing the quality of life for our clients by delivering personalized, comprehensive home care services.
              </p>
            </div>
          </div>
        </main>
        {/* sectilon 3 */}
        <main className="bg-gradient-to-r from-white via-[#E5FBFF] to-white">
            <div className="flex flex-col text-dark md:px-[80px] px-6 md:py-[64px] py-6 ">
                <section className="flex w-full flex-col justify-center items-center">
                    <h1 className='text[24px] leading-[32px] text-secondary'>Our Values</h1>
                    <h2 className='md:text-[28px] text-[24px] leading-[64px] text-[#151314]'>Our Company's Core Values</h2>
                    <p className='md:text-[18px] text-[14px] leading-[28px]'>Discover the driving force behind our company. Learn about our purpose and the core values that </p>
                    <p className='md:text-[18px] text-[14px] leading-[28px]'>define our culture and guide our actions.</p>
                </section>
                <section>
                <div class="grid grid-cols-5 gap-4 ">
  
  <div class="col-span-1 flex flex-col space-y-4">
    <div class="bg-gray-200 h-48">Left Card 1</div>
    <div class="bg-gray-200 h-48">Left Card 2</div>
  </div>

  
  <div class="col-span-3 flex justify-center items-center">
    <div class="bg-gray-200 h-48 w-64">Center Card</div>
  </div>

  
  <div class="col-span-1 flex flex-col space-y-4">
    <div class="bg-gray-200 h-48">Right Card 1</div>
    <div class="bg-gray-200 h-48">Right Card 2</div>
  </div>
</div>
                </section>
            </div>
        </main>

        {/* section four */}
        <main className='bg-lightOrange'>
            <div className='md:px-[80px] px-6 md:py-[64px] py-6 flex  md:flex-row flex-col items-center  md:gap-12 gap-6'>
                <div className="flex flex-col gap-6 md:w-1/2 w-full">
                    <h2  className='font-medium md:leading-[64px] md:text-[48px] text-[36px]'>Our Commitment</h2>
                    <p className='md:text-[18px] text-[12px] leading-[28px] '>
                    At Mindspot, we offer compassionate, personalized home care with a focus on your unique needs. Your well-being is our top priority as we provide a range of services designed to support your independence and uphold your dignity.
                    </p>
                    <p className='md:text-[18px] text-[12px] leading-[28px] '>Our commitment to diversity and inclusion means we ensure equal access to high-quality care for everyone, regardless of race, ethnicity, religion, sexual orientation, gender identity, age, or disability. We honor and respect the distinct needs and perspectives of each person we serve.</p>
                </div>
                <div className='w-full md:w-1/2 flex justify-end '>
                    <Image src={commitment} alt='' />
                </div>
            </div>
        </main>
        {/* section five */}
        <main className="bg-gradient-to-r from-white via-lightOrange to-white">
           <OurStory />
        </main>

        {/* section six */}
        <main className='bg-white'>
           <div className='md:px-[80px] px-6 md:py-[64px] py-6 flex flex-col gap-6'>
           <h2 className='md:text-[28px] text-[24px] md:leading-[64px] text-center text-[#151314]'>Why Choose US</h2>
           <Image src={why} alt='why-image' />
            <div className="flex md:flex-row flex-col md:gap-12 gap-6">
                <section className='flex gap-4 flex-col'>
                <p className='md:text-[18px] text-[14px] leading-[28px]'>The dedicated team at Mindspot Health Care Services is committed to ensuring your complete satisfaction. Our caregivers not only provide the comfort you need but also enrich your life and the lives of your loved ones. We strive to help you live safely, independently, and happily in the comfort of your own home.
            </p>
                <p className='md:text-[18px] text-[14px] leading-[28px]'>     What sets us apart from other home care agencies is the exceptional training and genuine care that our caregivers bring to their work. We carefully select only the best caregivers through a rigorous selection process.</p>
                </section>
                <section className='flex gap-4 flex-col'>
                <p className='md:text-[18px] text-[14px] leading-[28px]'>Once chosen, our caregivers undergo additional training and development to embody the unique qualities that define Mindspot Health Care Services. Our caregivers are bonded, insured, and highly skilled in personal care.
            </p>
                <p className='md:text-[18px] text-[14px] leading-[28px]'>
                We are here to be your partner in caring for a sick or elderly loved one. Our caregivers will be there when you need them, visiting you in your home, providing the relief you need, and treating you like family. Because to us, you're already family.
                </p>
                </section>
            </div>
           </div>
        </main>
    </main>
  )
}
