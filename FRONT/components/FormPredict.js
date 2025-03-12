'use client';
import React, { useState } from 'react';
import Button from 'components/Button';
import Link from 'next/link';
import ResultPredict from './ResultPredict';

export default function FormPredict() {
  const [recomendation, setRecomendation] = useState('');
  const [title, setTitle] = useState('');
  const [formData, setFormData] = useState({
    n: null,
    p: null,
    k: null,
    temperature: null,
    humidity: null,
    ph: null,
    rainfall: null,
  });
  const [sub, setSub] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:9000/recomendation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {
        setRecomendation(formData)
        recomendation["titulo"] = title;
        recomendation["num_cultivo"] = data; //resultado titulo mas cultivo en un objeto
        console.log(recomendation)
        const keys = Object.keys(recomendation);
        const longitud = keys.length;
        longitud == 9 ? setSub(true) : null
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // guardar datos del formulario en cookie



  return (

    <div className='flex flex-col items-center'>
      {sub ? <ResultPredict recomendation={recomendation} /> :

        <><img src='/images/cerca.png' className='my-4' />
          <h2 className='py-7 text-center text-4xl font-semibold text-primary'>
            ¡Obtén resultados precisos para tu tierra en segundos!
          </h2>
          <form onSubmit={handleSubmit} >
            <div className='mx-28 grid grid-flow-col grid-rows-4 items-center justify-center gap-6'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Tìtulo</span>
                </label>
                <input
                  name='title'
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  placeholder='Titulo de la predicción'
                  className='input input-bordered input-secondary w-full max-w-sm'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Nitrógeno</span>
                </label>
                <input
                  name='n'
                  type='number'
                  placeholder='0'
                  className='input input-bordered input-secondary w-full max-w-xs'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Fósforo</span>
                </label>
                <input
                  name='p'
                  type='number'
                  placeholder='0'
                  className='input input-bordered input-secondary w-full max-w-xs'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Potásio</span>
                </label>
                <input
                  name='k'
                  type='number'
                  placeholder='0'
                  className='input input-bordered input-secondary w-full max-w-xs'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Temperatura</span>
                </label>
                <input
                  name='temperature'
                  type='number'
                  placeholder='0'
                  className='input input-bordered input-secondary w-full max-w-xs'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Humedad</span>
                </label>
                <input
                  name='humidity'
                  type='number'
                  placeholder='0'
                  className='input input-bordered input-secondary w-full max-w-xs'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>PH</span>
                </label>
                <input
                  name='ph'
                  type='number'
                  placeholder='0'
                  className='input input-bordered input-secondary w-full max-w-xs'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Precipitación</span>
                </label>
                <input
                  name='rainfall'
                  type='number'
                  placeholder='0'
                  className='input input-bordered input-secondary w-full max-w-xs'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='my-10 flex justify-center'>
              <Button style='primary' type='submit' href="about-section">
                Predecir
              </Button>
            </div>
          </form>
        </>
      }
    </div>
  );
}
