'use client';

import Button from 'components/Button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='navbar sticky top-0 z-50 bg-white bg-opacity-80 px-8 py-5 backdrop-blur-md backdrop-filter'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <ul className='menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow'>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Sobre nosotros</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        <img src='/images/logo-VG-original.png' className='h-auto w-40' />
      </div>
      <div className='navbar-center hidden lg:flex '>
        <ul className='menu menu-horizontal px-1'>
          <Link href='#initial-section'>
            <li className='mx-3 font-semibold hover:text-primary focus:text-primary'>Inicio</li>
          </Link>
          <Link href='#services-section'>
            <li className='mx-3 font-semibold hover:text-primary focus:text-primary'>Servicios</li>
          </Link>
          <Link href='#about-section'>
            <li className='mx-3 font-semibold hover:text-primary focus:text-primary'>Sobre Nosotros</li>
          </Link>
          <Link href='#contact-section'>
            <li className='mx-3 font-semibold hover:text-primary focus:text-primary'>Contacto</li>
          </Link>
        </ul>
      </div>
      <div className='navbar-end'>
        <Button style='primary'>
          <Link href={'/login'}>Empezar</Link>
        </Button>
      </div>
    </nav>
  );
}
