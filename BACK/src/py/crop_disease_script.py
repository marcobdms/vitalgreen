import sys
import numpy as np
from PIL import Image
import tensorflow as tf

def process_file(file_path,model_route):
    
    try:
        model = tf.keras.models.load_model(model_route)
        
        new_img = Image.open(file_path)
        new_img = new_img.resize((150,150))
        new_img = np.array(new_img) / 255.0
        new_img = np.expand_dims(new_img, axis = 0)

        prediccion = model.predict(new_img)

        if prediccion[0][0] >= 0.5:
            "La planta esta enferma."
            print(1)
        else:
            "La planta esta sana."
            print(0)
    except FileNotFoundError:
        print("Archivo no encontrado.")
    except Exception as e:
        print(f"Error al procesar la imagen: {str(e)}")

if __name__ == "__main__":
    # Obtener la ruta del archivo como argumento de línea de comandos
    if len(sys.argv) > 2:
        file_path = sys.argv[1]
        model_route = sys.argv[2]
        process_file(file_path,model_route)
    else:
        print("Por favor, especifique la ruta del archivo como argumento y el nombre del cultivo.")