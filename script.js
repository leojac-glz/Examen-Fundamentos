// JavaScript
// FUNCIÓN PARA LEER ARCHIVO
function leerArchivo() {
    try {
        const input = document.getElementById("archivo");
        const archivo = input.files[0];

        if (!archivo) {
            throw new Error("No se seleccionó ningún archivo.");
        }

        const lector = new FileReader();

        lector.onload = function (evento) {
            document.getElementById("contenido").textContent = evento.target.result;
        };

        lector.onerror = function () {
            throw new Error("Error al leer el archivo.");
        };

        lector.readAsText(archivo);

    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        console.log("Proceso de lectura finalizado.");
    }
}

// FUNCIÓN PARA GUARDAR ARCHIVO
function guardarArchivo() {
    try {
        const texto = document.getElementById("texto").value;

        if (texto.trim() === "") {
            throw new Error("El texto está vacío.");
        }

        const blob = new Blob([texto], { type: "text/plain" });
        const enlace = document.createElement("a");

        enlace.href = URL.createObjectURL(blob);
        enlace.download = "archivo.txt";
        enlace.click();

        URL.revokeObjectURL(enlace.href);

    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        console.log("Proceso de escritura finalizado.");
    }
}