'use client';

export default function Footer() {
  return (
    <footer className='text-green footer bg-white p-10'>
      <aside>
        <svg fillRule='evenodd' clipRule='evenodd' className='hidden'></svg>
        <div>
          <img src='/images/icono-VG-verde.png' className='h-auto w-32' />
        </div>
      </aside>
      <nav>
        <header className='footer-title'>Desarrollado por:</header>
        <a className='text-sm font-semibold'>Marco</a>
        <a className='text-sm font-semibold'>Ismael</a>
        <a className='text-sm font-semibold'>Sergio</a>
        <a className='text-sm font-semibold'>Génesis</a>
        <div className='grid grid-flow-col gap-4'></div>
      </nav>
    </footer>
  );
}
