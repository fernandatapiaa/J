function verificarRespuesta() {
    var respuesta = document.querySelector('input[name="respuesta"]:checked');

    if (respuesta) {
        var mensajeResultado = document.getElementById('mensajeResultado');
        mensajeResultado.innerHTML = '¡te amo papi, gracia mi amo hermoso, divino, bello, guapo!';

        if (respuesta.value === 'chi') {
            desactivarOpcionNo();
        }
    } else {
        alert('Por favor, selecciona una opción.');
    }
}

function desactivarOpcionNo() {
    var opcionNo = document.querySelector('input[value="no"]');
    opcionNo.disabled = true;
}
