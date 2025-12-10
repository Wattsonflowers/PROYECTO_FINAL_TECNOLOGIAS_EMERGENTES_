window.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bookingForm");
    const resultados = document.getElementById("results");
    const errorBox = document.getElementById("errorBox");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        errorBox.style.display = "none";
        resultados.classList.remove("empty");

        let origen = document.getElementById("origen").value;
        let destino = document.getElementById("destino").value;
        let pasajeros = document.getElementById("pasajeros").value;

        if (origen === "" || destino === "") {
            mostrarError("Debes seleccionar origen y destino.");
            return;
        }

        if (origen === destino) {
            mostrarError("El origen y destino no pueden ser iguales.");
            return;
        }

        let precio = 0;

        if (origen === "LPB") precio = 300;
        if (origen === "VVI") precio = 280;
        if (origen === "CBB") precio = 260;
        if (origen === "TJA") precio = 320;
        if (origen === "SRE") precio = 250;
        if (origen === "ORU") precio = 230;
        if (origen === "POI") precio = 240;

        let total = precio * pasajeros;

        resultados.innerHTML = `
            <div class="flight-card">
                <div>
                    <h3>${origen} → ${destino}</h3>
                    <p>Pasajeros: ${pasajeros}</p>
                </div>
                <div class="flight-price">
                    <strong>${total} Bs</strong>
                </div>
            </div>
        `;
    });

    function mostrarError(msg) {
        errorBox.textContent = msg;
        errorBox.style.display = "block";
    }

});
