'use client';

import Button from 'components/Button';
import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_repeat: '',
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
      const response = await fetch('http://localhost:9000/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Maneja la respuesta exitosa aquí (por ejemplo, redirecciona al usuario)
        window.location.href = '/login';
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
    <div className='flex min-h-screen flex-col items-center bg-neutral'>
      <Link href='http://localhost:3000/'>
        <img src='/images/logo-VG-original.png' className='my-8 h-auto w-40 grid-cols-1' />
      </Link>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src='/images/plants.jpg' className='mx-20 max-w-md rounded-xl shadow-2xl' />
        <form onSubmit={handleSubmit}>
          <div className='card w-full max-w-lg flex-shrink-0 bg-white shadow-2xl'>
            <div className='card-body'>
              <label className='label'>
                <p className='text-base'>
                  ¿Ya tienes una cuenta?{' '}
                  <a href='/login' className='link-hover link-primary text-base font-bold'>
                    Iniciar sesión
                  </a>
                </p>
              </label>
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
                  placeholder='Username'
                  className='input input-bordered input-secondary'
                />
              </div>

              <div className='form-control'>
                <label className='label' htmlFor='email'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  type='email'
                  placeholder='Email'
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
                  placeholder='Contraseña'
                  className='input input-bordered input-secondary'
                />
              </div>
              <div className='form-control'>
                <label className='label' htmlFor='password_repeat'>
                  <span className='label-text'>Repite tu Contraseña</span>
                </label>
                <input
                  id='password_repeat'
                  name='password_repeat'
                  value={formData.password_repeat}
                  onChange={handleChange}
                  type='password'
                  placeholder='Repite la contraseña'
                  className='input input-bordered input-secondary'
                />
              </div>
              <div className='form-control mt-6'>
                <Button style='primary' type='submit'>
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
