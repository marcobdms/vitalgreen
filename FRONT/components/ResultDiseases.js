'use client';

import Button from 'components/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function ResultDiseases(props) {
  console.log(props.isDiseased.dis)




  return (
    <div className='hero min-h-[80vh] bg-neutral'>
      <div className='hero-content text-center'>
        <div className='max-w-xl'>
          <h3 className='my-2 font-primary text-2xl font-semibold text-primary'>Tu planta</h3>
          <h1 className='py-3 font-primary text-5xl font-bold'>{props.isDiseased.dis == 0 ? "Esta Saludable" : "Esta enferma"}</h1>
          <div className='py-7'>
            <Button style='primary' type='submit'>
              <Link href={'/profile-menu'}>Volver al menú</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
