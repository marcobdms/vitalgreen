'use client';

import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Button from 'components/Button';
import ResultDiseases from './ResultDiseases';

const fileTypes = ['JPG', 'PNG'];

function DragAndDrop() {
  const [files, setFile] = useState([]);
  const [fileName, setFileName] = useState();
  const [cropName, setCropName] = useState();
  const [disease, setDisease] = useState();
  const [submit, setSubmit] = useState(false);

  const handleFileDrop = (file) => {
    setFile(file);
    // Crear una instancia de FormData para enviar el archivo al servidor
    const formData = new FormData();
    formData.append('file', file);

    // Enviar el archivo al servidor
    fetch('http://localhost:9000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        setFileName(result); // Mensaje de respuesta del servidor
      })
      .catch((error) => {
        alert('Error al subir el archivo');
        console.error('Error al subir el archivo:', error);
      });
  };
  //boton de enviar
  const handleSubmit = () => {
    fetch(`http://localhost:9000/open-file/${fileName}/${cropName}`)
      .then((response) => response.text())
      .then((data) => {
        let split = data.split('\n');
        split.splice(0, 3);
        setDisease({ dis: split.join('\n'), crop: cropName })
        // aqui se guarda el resultado de la enfermedad si esta sana aqui se graba un 0 si esta enferma se grabara un 1

        setSubmit(true)
      })
      .catch((error) => console.error('Error:', error));


  }


  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-secondary'>
      {submit ? <ResultDiseases isDiseased={disease} /> : <>
        <div className='py-5'>
          <img src='/images/bota-planta.png' />
        </div>
        <h2 className='my-5 font-primary text-5xl font-bold'>¿Tienes una planta que no se ve saludable?</h2>
        <p className='font-primary text-xl text-primary'>
          <span className='font-semibold'>¡Estamos aquí para ayudarte!</span> Sube una imagen de tu planta enferma a
          continuación <br />y utilizaremos nuestra avanzada tecnología de detección para identificar el problema
        </p>
        <div className='card m-8 w-2/5 flex-shrink-0 bg-white shadow-2xl'>
          <div className='flex flex-col items-center py-7'>
            <select
              className='select select-primary my-8 w-full max-w-xs'
              onChange={(e) => setCropName(e.target.value)}
            >
              <option disabled selected>
                Elige un cultivo
              </option>
              <option value="Apple">Manzano</option>
              <option value="Maize">Maiz</option>
              <option value="Grape">Viña</option>
            </select>
            <FileUploader
              handleChange={handleFileDrop}
              name='file'
              classes='bg-white py-12 px-36 border-dashed border-2 border-primary rounded-lg flex flex-col items-center hover:bg-stone-100'
              types={fileTypes}
            >
              <img src='/images/upload-icon.png' className='py-3' />
              <label className='label-text text-primary'>Arrastra tus imágenes o haz click aquí</label>
            </FileUploader>
            <div className='my-5'>
              <Button style='primary' onClick={handleSubmit}>Enviar</Button>
            </div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default DragAndDrop;
