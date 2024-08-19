import React from 'react'

export const BreadCrumb = ({label,page}) => {
  return (
    <div className="service  text-[#fff] w-full ">
    <div className="overlay ">
      <div className="flex w-full flex-col justify-center items-center gap-6 md:py-[140px]">
            <h2 className='md:text-[24px] text-[16px] text-secondary'>{label}</h2>
            <h3 className='md:text-[96px] text-[64px] font-semibold md:leading-[115.2px] text-white'>{page}</h3>
      </div>
    </div>
  </div>
  )
}
