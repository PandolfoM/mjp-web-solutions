import { jetBrains } from '@/app/fonts';
import React from 'react';
import Button from '../ui/button';
import { IconLayoutGrid } from '@tabler/icons-react';

function Navigation() {
  return (
    <nav className='flex items-center justify-between h-[50px] mb-[25px] px-7'>
      <div>
        <h5 className='text-xs'>MJP</h5>
        <h6 className={`${jetBrains.className} text-xxs opacity-75`}>Web Solutions</h6>
      </div>
      <div className='flex items-center justify-end gap-4'>
        <Button textSize='text-sm'/>
        <IconLayoutGrid width={"20px"} className='opacity-75'/>
      </div>
    </nav>
  );
}

export default Navigation;