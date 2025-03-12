import sys
import pickle
import joblib
import warnings
warnings.filterwarnings("ignore", message="X does not have valid feature names, but StandardScaler was fitted with feature names")

def process_file(n, p, k, temperature, humidity, ph, rainfall,model_path,scale_path):
    try:
        data = [[n, p, k, temperature, humidity, ph, rainfall]]
        scaler = joblib.load(scale_path)
        scaled_data = scaler.transform(data)

        with open(model_path, 'rb') as archivo:
            model = pickle.load(archivo)

        prediccion = model.predict(scaled_data)
        print(prediccion[0])

    except FileNotFoundError:
        print("Archivo de modelo no encontrado.")
    except Exception as e:
        print(f"Error en el script: {str(e)}")
if __name__ == "__main__":
    # Obtener la ruta del archivo como argumento de línea de comandos
    if len(sys.argv) > 7:
        n = sys.argv[1]
        p = sys.argv[2]
        k = sys.argv[3]
        temperature = sys.argv[4]
        humidity = sys.argv[5]
        ph = sys.argv[6]
        rainfall = sys.argv[7]
        model_path = sys.argv[8]
        scale_path = sys.argv[9]
        process_file(n, p, k, temperature, humidity, ph, rainfall,model_path,scale_path)
    else:
        print("Por favor, especifique la ruta del archivo como argumento y el nombre del cultivo.")


