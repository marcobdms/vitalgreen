'use client';
import Link from 'next/link';
import Button from 'components/Button';

export default function Hero() {
  return (
    <section id='initial-section'>
      <div className='hero bg-secondary py-28'>
        <div className='hero-content grid grid-cols-2 gap-8'>
          <div>
            <img src='/images/tomates.jpg' className='mask mask-circle absolute left-2 z-0 max-w-3xl' />
            <img src='/images/ilustraciones-vital.png' className='z-1 relative max-w-xl' />
          </div>
          <div>
            <h1 className='text-5xl font-semibold'>
              <span className='font-secondary font-normal'>Cultivar</span> en casa nunca fue tan fácil{' '}
            </h1>
            <p className='py-6 text-2xl text-primary'>
              Cultiva <span className='font-bold'>salud y sostenibilidad</span> en tu hogar con la ayuda de nuestra
              plataforma
            </p>
            <Button style='primary'>
              <Link href={'/login'}>Quiero empezar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
