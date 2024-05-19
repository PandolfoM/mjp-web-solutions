"use client"

import Plans from '@/components/ui/plans';
import Section from '@/components/ui/section';
import React from 'react';

function PlansPage() {
  return (
    <Section className='flex flex-col'>
      <Plans orientation='vertical'/>
    </Section>
  );
}

export default PlansPage;