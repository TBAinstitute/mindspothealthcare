import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const PrimaryButton = ({link,label,icon, color}) => {
  return (
    <div className=''>
        <Link href={link} className={`flex items-center justify-center text-white gap-2 px-[24px] py-[10px] ${color} rounded-md`}>
           {label}
           {icon && (<Image src={icon} alt='button-icon' />)}
        </Link>
    </div>
  )
}
