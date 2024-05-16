import { jetBrains } from '@/app/fonts';
import React from 'react';
import Button from './button';

function Hero() {
  return (
    <section className='text-center px-7'>
      <h1 className='font-bold text-lg'>Lorem ipsum dolor sit amet.</h1>
      <p className={`${jetBrains.className} text-sm opacity-75 pb-[25px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel  fringilla orci. Curabitur auctor orci et quam porta lacinia. Nam  fermentum laoreet ligula vitae hendrerit.</p>
      <Button className='w-[230px] h-[35px]'/>
    </section>
  );
}

export default Hero;