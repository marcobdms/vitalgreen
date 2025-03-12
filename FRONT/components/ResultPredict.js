'use client';

import Button from 'components/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ResultPredict(props) {

  const [crop_data, setCrop_data] = useState({})

  useEffect(() => {
    fetch('http://localhost:9000/api/crop-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plant_id: props.recomendation.num_cultivo }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {

        console.log(data)
        setCrop_data(data)
      })
      .catch((error) => {
        console.error(error.message);
      });

  }, []);


  return (
    <div className='hero bg-white'>
      <div className='hero-content flex-col py-10 lg:flex-row'>
        <img src={"/images/" + crop_data.ID + ".jpg"} className='mx-6 max-w-sm rounded-2xl shadow-2xl' />
        <div>
          <h1 className='font-primary text-2xl font-semibold text-primary'>El mejor cultivo para tu tierra es:</h1>
          <h2 className='py-2 font-primary text-5xl font-bold'>{crop_data.CommonName}</h2>
          <h4 className='font-primary text-lg font-medium'>
            Nombre científico: <span className='font-primary text-lg font-bold'>{crop_data.ScientificName}</span>
          </h4>
          <h4 className='font-primary text-lg font-medium'>
            Posibles enfermedades: <span className='font-primary text-lg font-bold'>{crop_data.Diseases}</span>
          </h4>
          <h4 className='font-primary text-lg font-medium'>
            Tiempo de cosecha: <span className='font-primary text-lg font-bold'>{crop_data.CultivationTime} Dias</span>
          </h4>
          <h4 className='font-primary text-lg font-medium'>
            Caracteristicas:<span className='font-primary text-lg font-bold'>{crop_data.Characteristics}</span>
          </h4>
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
