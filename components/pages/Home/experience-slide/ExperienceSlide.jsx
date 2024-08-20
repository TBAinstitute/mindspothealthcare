"use client"
import { useState, useRef, useEffect } from 'react';
import arrowLeft from "@/public/image/leftScroll.svg"
import arrowRight from "@/public/image/rightScroll.svg"
import Image from 'next/image';

const HorizontalScroll = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollTo = (index) => {
    const container = containerRef.current;
    const itemWidth = container.scrollWidth / items.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollTo(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < items.length - 1) {
      scrollTo(currentIndex + 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const itemWidth = container.scrollWidth / items.length;
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    };
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [items.length]);

  return (
    <div className="relative w-full">
      <div className="flex flex-col pl-[80px] gap-4">
        <div className='flex flex-col gap-6'>
            <h2 className='md:text-[56px] font-semibold md:leading-[72px] text-neutral font-custom'>Our Customer Experiences</h2>
            <p className='md:text-[18px] leading-[28px]'>Hear what our clients have to say</p>
        </div>
        <div className="overflow-x-scroll scrollbar-none flex space-x-4 w-full" ref={containerRef}>
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[600px] bg-light flex flex-col gap-6 rounded-[10px] p-6"
            >
              <p className='md:text-[18px] leading-[28px] text-neutral'>"{item.quote}"</p>
              <div className='flex flex-col gap-2'>
                <h2 className='font-medium md:text-[16px] leading-[28px]'>{item.name}</h2>
                <p className='text-[14px] leading-[20px]'>{item.state}</p>
              </div>
            </div>
          ))}
        </div>
      
      </div>
      <div className="flex justify-between  mt-4 space-x-2 md:px-[80px] px-6">
       <div className='flex items-center gap-1'>
       {items.map((_, index) => (
          <div
            key={index}
            className={`w-[8px] h-[8px] rounded-full ${currentIndex === index ? 'bg-secondary' : 'bg-[#FFD4B5]'}`}
          ></div>
        ))}
       </div>
        <div className="flex items-center gap-4">
        <button
          onClick={scrollLeft}
          className="p-2 bg-transparent rounded-full border-[1px] border-secondary "
          disabled={currentIndex === 0}
        >
          <Image src={arrowLeft} alt='sroll-left' />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 bg-transparent rounded-full border-[1px] border-secondary "
          disabled={currentIndex === items.length - 1}
        >
          <Image src={arrowRight} alt='sroll-right' />
        </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
