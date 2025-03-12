'use client';
import Button from 'components/Button';

export default function ContactSection() {
  return (
    <div id='contact-section' className='hero min-h-screen bg-gradient-to-t from-neutral to-white'>
      <div className='hero-content flex flex-col lg:flex-row'>
        <div className='px-8 text-center lg:text-left'>
          <h1 className='text-6xl leading-relaxed'>
            ¿Listo para empezar tu <span className='font-secondary font-normal'>huerto</span> en casa?{' '}
          </h1>
          <p className='py-6 text-3xl'>¡Contáctanos ahora y comencemos juntos este emocionante viaje verde!</p>
          <div>
            <img src='/images/macetas.png' className=' py-2'></img>
          </div>
        </div>
        <div className='card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Nombre</span>
              </label>
              <input type='text' placeholder='Nombre' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='email' placeholder='Email' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Mensaje</span>
              </label>
              <textarea className='textarea textarea-bordered' placeholder='Mensaje'></textarea>
            </div>
            <div className='form-control mt-6'>
              <Button style='primary'>Enviar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
