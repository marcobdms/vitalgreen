'use client';

import Button from 'components/Button';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envía la solicitud a la API con los datos de inicio de sesión
    try {
      const response = await fetch('http://localhost:9000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Maneja la respuesta exitosa aquí (por ejemplo, redirecciona al usuario)
        window.location.href = '/profile-menu';
      } else {
        // Maneja la respuesta de error aquí (por ejemplo, muestra un mensaje de error)
        alert('Error al iniciar sesión');
      }
    } catch (error) {
      // Maneja errores de red o del servidor aquí
      console.error('Error de red:', error);
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-secondary'>
      <Link href='http://localhost:3000/'>
        <img src='/images/logo-VG-original.png' className='my-8 h-auto w-40 grid-cols-1' />
      </Link>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src='/images/boots.jpg' className='mx-20 max-w-md rounded-xl shadow-2xl' />
        <form onSubmit={handleSubmit}>
          <div className='card w-full max-w-sm flex-shrink-0 bg-white shadow-2xl'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label' htmlFor='username'>
                  <span className='label-text'>Username</span>
                </label>
                <input
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  type='text'
                  placeholder='Introduce tu username'
                  className='input input-bordered input-secondary'
                />
              </div>
              <div className='form-control'>
                <label className='label' htmlFor='password'>
                  <span className='label-text'>Contraseña</span>
                </label>
                <input
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  type='password'
                  placeholder='contraseña'
                  className='input input-bordered input-secondary'
                />
              </div>
              <label className='label'>
                <p className='text-base'>
                  ¿Aún no tienes cuenta?{' '}
                  <a href='/register' className='link-hover link-primary text-base font-bold'>
                    Registrate
                  </a>
                </p>
              </label>
              <div className='form-control mt-6' type='submit'>
                <Button style='primary'>Iniciar sesión</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
