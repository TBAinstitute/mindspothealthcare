import React from 'react'
import { PrimaryButton } from '@/components/PrimaryButton'
import Image from 'next/image'
import commingSoon from "@/public/image/comming.png"
<<<<<<< HEAD
import soon1 from "@/public/image/soon1.png"
import soon2 from "@/public/image/soon2.png"
import soon3 from "@/public/image/soon3.png"

=======
import Health from "@/public/image/Health.png"
import HealthCare from "@/public/image/HealthCare.png"
import Nutrition from "@/public/image/Nutrition.png"
>>>>>>> Pelumi-indev

export const CommingSoon = () => {

    // const commingSoon = [
    //     {
    //         id:1,
    //         label:"Health",
    //         img:"",
    //         desc:"Get trusted source for practical tips, expert advice, and the latest insights in health and wellness. Empowering you to live a healthier, happier life."
    //     }
    // ]
  return (
    <div className='flex px-24'>
            <div className='md:w-1/2 w-full flex  flex-col gap-6 '>
            <p className='mmd:text-[16px] text-secondary'>Comming Soon!!!</p>
                    <h2 className='md:text-[48px] text-[16px] text-neutral font-medium '>Blog and Articles</h2>
                    <Image src={commingSoon} alt='comming-soon' className='md:h-[400px] h-auto' />
<<<<<<< HEAD
                   <div className='w-fit'> <PrimaryButton label={'Comming Soon!!!'} link={'/'} color={'bg-primary'} icon="" /></div>
=======
                   {/* <div className='w-fit'> <PrimaryButton label={'See More Blog Posts'} link={'/'} color={'bg-primary'} icon="" /></div> */}
>>>>>>> Pelumi-indev
            </div>
            <div className='md:w-1/2 w-full flex flex-col justify-between text-neutral '>
                    <div className='flex flex-col gap-4'>
                            <h2 className='md:text-[18px] '>Health</h2>
                            <div className='gap-6 flex items-center'>
<<<<<<< HEAD
                                <Image src={soon1} alt='img1' className='w-[30%] md:h-[130px] rounded-[10px]' />
                                <p className='md:text-[18px] leading-[28px] w-[70%]'>Get trusted source for practical tips, expert advice, and the latest insights in health and wellness. Empowering you to live a healthier, happier life.</p>
=======
                                <Image src={Health} alt='img1' width={150} height={150}/>
                                <p className='md:text-[18px] leading-[28px]'>Get trusted source for practical tips, expert advice, and the latest insights in health and wellness. Empowering you to live a healthier, happier life.</p>
>>>>>>> Pelumi-indev
                            </div>
                            <span className='w-full h-[1px] bg-neutral'></span>
                    </div>
                    <div className='flex flex-col gap-6'>
                            <h2 className='md:text-[18px] '>Home Care</h2>
                            <div className='gap-6 flex items-center'>
<<<<<<< HEAD
                                <Image src={soon2} alt='img1' className='w-[30%] md:h-[130px] rounded-[10px]'  />
                                <p className='md:text-[18px] leading-[28px] w-[70%]'>Get trusted source for practical tips, expert advice, and the latest insights in health and wellness. Empowering you to live a healthier, happier life.</p>
=======
                                 <Image src={HealthCare} alt='img2' width={150} height={150}/>
                                <p className='md:text-[18px] leading-[28px]'>Get trusted source for practical tips, expert advice, and the latest insights in health and wellness. Empowering you to live a healthier, happier life.</p>
>>>>>>> Pelumi-indev
                            </div>
                            <span className='w-full h-[1px] bg-neutral'></span>
                    </div>
                    <div className='flex flex-col gap-6'>
                            <h2 className='md:text-[18px] '>Nutrition</h2>
                            <div className='gap-6 flex items-center'>
<<<<<<< HEAD
                                <Image src={soon3} alt='img1' className='w-[30%] md:h-[130px] rounded-[10px]'  />
                                <p className='md:text-[18px] leading-[28px] w-[70%]'>Discover the power of balanced eating with expert tips, delicious recipes, and evidence-based insights. Your go-to resource for fueling a healthier, more vibrant life through nutrition.</p>
=======
                            <Image src={Nutrition} alt='img3' width={150} height={150}/>
                                <p className='md:text-[18px] leading-[28px]'>Discover the power of balanced eating with expert tips, delicious recipes, and evidence-based insights. Your go-to resource for fueling a healthier, more vibrant life through nutrition.</p>
>>>>>>> Pelumi-indev
                            </div>
                            
                    </div>
            </div>
    </div>
  )
}
