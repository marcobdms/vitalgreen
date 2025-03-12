'use client';

import Button from 'components/Button';
import Link from 'next/link';

export default function ProfileMenu() {
  return (
    <section id='services-section' className='bg-gradient-to-b from-secondary to-white py-10'>
      <div>
        <h2 className='my-5 pb-8 text-center text-3xl font-semibold font-primary'>
          ¿Quieres anticipar una cosecha abundante<br></br>o cuidar
          la salud de tus plantas?
        </h2>
      </div>
      <div className='container mx-auto grid grid-cols-2 justify-items-center'>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure>
            <img src='/images/cultivos.jpg' alt='cultivos' />
          </figure>
          <div className='text card-body'>
            <h2 className='card-title'>Recomiéndame cultivos</h2>
            <p>Para esta función necesitas los datos de tu tierra</p>
            <Button style='primary'>
              <Link href={'/predict'}>Empezar</Link>
            </Button>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure>
            <img src='/images/sick-plant.png' alt='enfermedades' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Detectar enfermedad en mi planta</h2>
            <p>Sólo necesitamos una fotografía de tu planta</p>
            <Button style='primary'>
              <Link href={'/diseases'}>Empezar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
