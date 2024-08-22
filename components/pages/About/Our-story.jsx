import React from 'react'
import Image from 'next/image'
import illustrator from "@/public/image/Nurse 1.png";
import nurse from "@/public/image/smily-nurse.png";
import { PrimaryButton } from '@/components/PrimaryButton'


export const OurStory = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 items-center md:px-[80px] px-6 md:py-[64px] py-6">
             <section className="flex flex-col gap-6">
                    <h1 className='text[24px] leading-[32px] text-secondary'>Our Story</h1>
                    <h2 className='md:text-[28px] text-[24px] md:leading-[64px] text-[#151314]'>Caring with compassion, your way.</h2>
                    <p className='md:text-[18px] text-[14px] leading-[28px]'>Experience personalized care that respects your needs and preferences. We're dedicated to providing compassionate support, tailored to fit your unique lifestyle."  </p>
                </section>
                <section className='flex justify-end'>
                    <Image src={illustrator} alt="illustrator" />
                </section>
                <section className=''>
                <Image src={nurse} alt="nurse" />
                </section>
                <section className='flex flex-col gap-6'>
                <h2 className='md:text-[28px] text-[24px] leading-[64px] text-[#151314]'>Patient Stories</h2>
                <p className='md:text-[18px] text-[14px] leading-[28px]'>With compassionate care and cutting-edge practices, we offer comprehensive in-home support for you and your loved ones. Our team is committed to meeting your evolving needs </p>
                <div className='w-fit'>
                <PrimaryButton label={'Coming Soon'} link="" color={"bg-primary"} />
                </div>
                </section>
    </div>
  )
}
