import React from 'react'
import { PrimaryButton } from '@/components/PrimaryButton'
import Image from 'next/image'
import commingSoon from "@/public/image/comming.png"
import soon1 from "@/public/image/soon1.png"
import soon2 from "@/public/image/soon2.png"
import soon3 from "@/public/image/soon3.png"


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
                   <div className='w-fit'> <PrimaryButton label={'Comming Soon!!!'} link={'/'} color={'bg-primary'} icon="" /></div>
            </div>
            <div className='md:w-1/2 w-full flex flex-col justify-between text-neutral '>
                    <div className='flex flex-col gap-4'>
                            <h2 className='md:text-[18px] '>Health</h2>
                            <div className='gap-6 flex items-center'>
                                <Image src={soon1} alt='img1' className='w-[30%] md:h-[130px] rounded-[10px]' />
                                <p className='md:text-[18px] leading-[28px] w-[70%]'>Get trusted source for practical tips, expert advice, and the latest insights in health and wellness. Empowering you to live a healthier, happier life.</p>
                            </div>
                            <span className='w-full h-[1px] bg-neutral'></span>
                    </div>
                    <div className='flex flex-col gap-6'>
                            <h2 className='md:text-[18px] '>Home Care</h2>
                            <div className='gap-6 flex items-center'>
                                <Image src={soon2} alt='img1' className='w-[30%] md:h-[130px] rounded-[10px]'  />
                                <p className='md:text-[18px] leading-[28px] w-[70%]'>Get trusted source for practical tips, expert advice, and the latest insights in health and wellness. Empowering you to live a healthier, happier life.</p>
                            </div>
                            <span className='w-full h-[1px] bg-neutral'></span>
                    </div>
                    <div className='flex flex-col gap-6'>
                            <h2 className='md:text-[18px] '>Nutrition</h2>
                            <div className='gap-6 flex items-center'>
                                <Image src={soon3} alt='img1' className='w-[30%] md:h-[130px] rounded-[10px]'  />
                                <p className='md:text-[18px] leading-[28px] w-[70%]'>Discover the power of balanced eating with expert tips, delicious recipes, and evidence-based insights. Your go-to resource for fueling a healthier, more vibrant life through nutrition.</p>
                            </div>
                            
                    </div>
            </div>
    </div>
  )
}
