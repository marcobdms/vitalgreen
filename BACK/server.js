const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');


require('dotenv').config();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const router = require('./routes/routes');
app.use('/api', router);


//python script execute
//Multer config
const storage = multer.diskStorage({
    destination: './uploads/crop-image',
    filename: (req, file, cb) => {
        //Generate unique name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});
const upload = multer({ storage });

//upload route
app.post('/upload', upload.single('file'), (req, res) => {
    //get name of uploaded file
    const fileName = req.file.filename;
    console.log('Nombre del archivo:', fileName);
    res.send(fileName);

});

// get upload files route
app.get('/api/files', (req, res) => {
    // Agregar el encabezado Access-Control-Allow-Origin a la respuesta
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

    const directoryPath = path.join(__dirname, 'uploads');
    fs.readdir(directoryPath, (error, files) => {
        if (error) {
            console.error('Error al leer el directorio:', error);
            res.status(500).json({ error: 'Error al leer el directorio' });
        } else {
            res.json(files);
        }
    });
});

//open python script route
//disease script
app.get('/open-file/:filename/:cropname', (req, res) => {
    const { filename, cropname } = req.params;
    //var del resultado
    let disease;

    // crop disease script route
    const pythonScriptPath = path.join(__dirname, 'src/py/crop_disease_script.py');
    const model_path = path.join(__dirname, `src/py/trained_model/disease/modelo_entrenado_${cropname}.h5`)
    const img_path = path.join(__dirname, `uploads/crop-image/${filename}`)
    // ejecute python script
    const pythonScript = spawn('python', [pythonScriptPath, img_path, model_path]);
    console.log(pythonScript);
    // Manejar la salida del script de Python
    pythonScript.stdout.on('data', (data) => {
        disease += data.toString();

    });

    // Manejar los errores del script de Python
    pythonScript.stderr.on('data', (data) => {
        console.error(`Error en el script de Python: ${data}`);
    });
    // Cuando el script de Python haya terminado de ejecutarse
    pythonScript.on('close', (code) => {
        if (code === 0) {
            // Si el script se ejecutó sin errores, enviar la salida al cliente React
            res.send(disease);
        } else {
            // Si hubo errores en el script, enviar un mensaje de error al cliente React
            res.status(500).send('Error en el script de Python');
        }
    });
});

//recomendation route
app.post('/recomendation', (req, res) => {
    let recomendacion;
    // crop disease script route
    const pythonScriptPath = path.join(__dirname, 'src/py/recomendation_script.py');
    //rutas del modelo y del scaler
    const model_path = path.join(__dirname, 'src/py/trained_model/recomendation/knn_trained_model.pkl')
    const scale_path = path.join(__dirname, 'src/py/trained_model/recomendation/scaler_model.joblib')
    // ejecute python script
    const pythonScript = spawn('python', [pythonScriptPath, req.body.n, req.body.p, req.body.k, req.body.temperature, req.body.humidity, req.body.ph, req.body.rainfall, model_path, scale_path]);
    console.log(pythonScript);
    // Manejar la salida del script de Python
    pythonScript.stdout.on('data', (data) => {
        console.log(`Salida del script de Python: ${data}`);
        //guardar los datos
        recomendacion = data.toString()

    });

    // Manejar los errores del script de Python
    pythonScript.stderr.on('data', (data) => {
        console.error(`Error en el script de Python: ${data}`);
    });

    // Cuando el script de Python haya terminado de ejecutarse
    pythonScript.on('close', (code) => {
        if (code === 0) {
            // Si el script se ejecutó sin errores, enviar la salida al cliente React
            res.send(recomendacion);
        } else {
            // Si hubo errores en el script, enviar un mensaje de error al cliente React
            res.status(500).send('Error en el script de Python');
        }
    });

});



app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})


