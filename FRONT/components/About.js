'use client';

export default function AboutSection() {
  return (
    <div id='about-section' className='bg-white py-16'>
      <div className='hero min-h-screen'>
        <div className='flex flex-col items-center lg:flex-row'>
          <img src='/images/people.jpg' className='ml-40 max-w-xl rounded-3xl shadow-2xl' />
          <div className='m-8 mx-32 pl-8'>
            <h1 className='text-5xl font-semibold text-primary'>Sobre Nosotros</h1>
            <p className='py-5 text-xl font-primary'>
              En <span className="font-primary font-semibold">VitalGreens</span>, estamos dedicados a hacer que <span className="font-primary font-semibold">la jardinería en casa sea accesible</span>, emocionante y
              gratificante para todos. Nuestro compromiso es claro: queremos ser tu guía confiable en este viaje de
              jardinería. Entendemos que cada planta tiene una historia que contar y que cada rincón de tu hogar tiene
              el potencial de convertirse en un tu huerto. ¿Qué nos hace diferentes? No solo te proporcionamos
              conocimientos y recursos, sino que también creamos una comunidad de amantes de la jardinería que comparten
              su experiencia, consejos y trucos. Creemos en la fuerza de la comunidad para inspirar y empoderar a las
              personas a cuidar de sus plantas y cosechar la satisfacción de cultivar alimentos frescos y hermosas
              flores.
            </p>
            <p className='py-6 text-xl font-primary'>
              Nuestra misión es proporcionarte herramientas prácticas, consejos expertos y una plataforma donde puedas
              aprender, conectarte y prosperar como jardinero en casa. No importa si sueñas con cosechar tus propios
              alimentos saludables o simplemente deseas rodearte de la belleza de las plantas, estamos aquí para
              ayudarte a alcanzar tus objetivos. Únete a nosotros en este viaje verde y descubre el placer de cultivar
              en casa. <span className="font-primary font-semibold"> ¡Bienvenido a VitalGreens</span> donde tu historia de jardinería comienza a florecer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
