import json
from datetime import datetime

# Leer las especies existentes del archivo JSON
try:
    with open('avistamientos.json', 'r', encoding='utf-8') as archivo:
        especies = json.load(archivo)
except FileNotFoundError:
    # Si el archivo no existe, inicializar una lista vacía
    especies = []
except json.JSONDecodeError:
    # Si el archivo está vacío o contiene datos no válidos, inicializar una lista vacía
    especies = []

# Pedir datos desde la consola hasta que se introduzca el Id 0
while True:
    id = int(input("Introduzca el id de la especie "))
    if id == 0:
        break
    # Pedir el resto de los datos
    tipoEspecie = input("Introducir Tipo de Especie ")
    nombre = input("Introducir nombre de la especie ")
    cientifico = input("Introducir nombre científico de la especie ")
    habi = input("Introduzca donde Vive o fue avistada ")
    lat = float(input("Indique Latitud "))
    longi = float(input("Indique la longitud "))
    altura = int(input("Introduzca la altitud "))

    fecha= input("Introduzca fecha de avistamiento en formato dd-mm-yyyy ")      
    # Formatear la fecha como "d MMM yyyy" (por ejemplo: "8 jul. 2017")
    fecha_dt = datetime.strptime(fecha, "%d-%m-%Y")
    fecha_formateada = fecha_dt.strftime("%d %m. %Y")

    urlImagen = input("Introduzca la url de la imagen ")
    
    # Armar el diccionario con los datos introducidos
    diccionario = {
        "Id": id,
        "Tipo": tipoEspecie,
        "Nombre comun": nombre,
        "Nombre cientifico": cientifico,
        "Habitat o  lugar de avistamiento": habi,
        "Latitud": lat,
        "Longitud": longi,
        "Altitud": altura,
        "Fecha avistamiento":fecha,
        "imagen": urlImagen
    }
    
    # Agregar el diccionario a la lista de especies
    especies.append(diccionario)

# Escribir la lista completa en el archivo JSON
try:
    with open('avistamientos.json', 'w', encoding='utf-8') as archivo:
        json.dump(especies, archivo, ensure_ascii=False, indent=4)
except FileNotFoundError:
    print("Archivo no encontrado")
except UnicodeDecodeError:
    print("Formato no es legible")
except Exception as e:
    print(f"Hubo un error: {e}")

print("Listo, carga de especies completada")