import React from 'react'
import Link from 'next/link'

export const PrimaryButton = ({link,label,icon, color}) => {
  return (
    <div className=''>
        <Link href={link} className={`flex items-center text-white gap-2 px-[24px] py-[10px] ${color} rounded-md`}>
           {label}
           {icon}
        </Link>
    </div>
  )
}
