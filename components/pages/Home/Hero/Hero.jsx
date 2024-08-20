import React from 'react'
import { PrimaryButton } from '@/components/PrimaryButton'
import RandomImageSlider from './HeroImage'
import arrow from "@/public/image/btnArrow.svg"

export const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col gap-12   items-center h-screen  bg-gradient-to-r from-gray-100 via-[#E5FBFF] to-gray-100  '>
        <div className=' md:w-1/2 w-full flex items-center'>
          <div className='md:pl-[80px] lg:pr-[40px] md:pr-[20px] px-6  flex flex-col gap-6'> 
          <h2 className='text-primary md:text-[64px] font-medium leading-[80px] font-custom '>Providing <span className='text-secondary'>Exceptional</span> Home Care Services</h2>
            <p>At Mindspot Health Care Services, where compassion  meets expertise. We understand that home is where the heart is, and we're dedicated to helping you or your loved ones thrive in familiar surroundings.</p>
            <div className='w-fit'><PrimaryButton link="https://docs.google.com/forms/d/e/1FAIpQLSc0IgYpVjE3xLNS7bdbd1HN_cHx5o2Of1yfAXANgCVFC87p6g/viewform?embedded=true%22"  label={"Schedule an Appointment"} color="bg-primary" icon={arrow} /></div>
          </div>
        </div>
        <div className='md:w-1/2 w-auto'>
              <RandomImageSlider />
        </div>
    </div>
  )
}
