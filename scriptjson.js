// Para identificar el archivo a cargar
const requestURL = "avistamientos.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

// Una vez cargado el archivo
request.onload = function() {
    const especies = request.response;
    let contenidoHTML = "";

    especies.forEach(especie => {
        // Crear la lista
        let lista = "<ul class='listaEspecies'>";
        const claves = Object.keys(especie);
        for (let i = 0; i < claves.length; i++) {
            if (claves[i] !== "imagen") {
                lista += `<li>${claves[i]}: ${especie[claves[i]]}</li>`;
            }
        }
        lista += "</ul>";

        // Crear el HTML del contenedor
        contenidoHTML += `
            <div class="especieContainer">
                <div class="listaContainer">${lista}</div>
                <img src="${especie.imagen}" alt="Imagen de ${especie['Nombre comun']}" class="imagenEspecie">
            </div>
        `;
    });

    // Añadir el contenido HTML al div principal
    document.getElementById("especie").innerHTML = contenidoHTML;
}
