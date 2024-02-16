/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#siguiente').onclick = function(event) {
    borrarIntegrantesAnteriores()
    let sinError = validarcantidadIntegrantes() === '';
    if (sinError){
        ocultarErrorCantidadIntegrantes()
        crearIntegrantes()
        mostrarBotonCalcular()
        ocultarResultados()
        ocultarErrorEdadIntegrantes();
  
    }else{
        mostrarErrorCantidadIntegrantes();
    }
    event.preventDefault();
  };
document.querySelector('#calcular').onclick = function(event){
    edades()
    calculos()
    let sinEdadError =  validarEdadIntegrante() === '';
    if(sinEdadError){
        ocultarErrorEdadIntegrantes()
        editarResultados()
        mostrarResultados()
    } else{
        mostrarErrorEdadIntegrantes()
        ocultarResultados()
    }
    event.preventDefault();
}
document.querySelector('#reiniciar').onclick = function() {
    resetear();
};
function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
    document.querySelector('#cantidad-integrantes').value = '';
}
function crearIntegrantes(){
    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value)
    const integrante = document.querySelector('#integrantes')
    for (let  i = 0; i<cantidadIntegrantes;i++){
        const $integrante = document.createElement('label');
        $integrante.innerText = "Ingrese la edad del integrante " + (i+1);
        $integrante.className = 'textoEdad'
        integrante.appendChild($integrante)
        const $edadIntegrante = document.createElement('input')
        $edadIntegrante.type="number"
        $edadIntegrante.className = 'edadIntegrante'
        integrante.appendChild($edadIntegrante)
        const $saltoDeLinea = document.createElement('br');
        integrante.appendChild($saltoDeLinea);
    }
}
function borrarIntegrantesAnteriores(){
    const integrante = document.querySelector('#integrantes')
    integrante.innerHTML= ''
}
function mostrarBotonCalcular(){
    const botonCalcular = document.querySelector('#calcular')
    botonCalcular.className = ''
}
function edades() {
    const edades= document.querySelectorAll('.edadIntegrante')
    edadesList =[]
    edades.forEach(function(inputEdad){
        valor = Number(inputEdad.value)
        edadesList.push(valor)
    })
}
function calculos(){
    mayorNumero = obtenerMayorNumero(edadesList)
    menorNumero = obtenerMenorNumero(edadesList)
    promedio = obtenerPromedio(edadesList)
}
function editarResultados(){
    let PromedioEdad = document.querySelector('[name="promedioEdad"]');
    PromedioEdad.textContent = 'El promedio es: ' + promedio
    let MayorEdad = document.querySelector('[name="mayorEdad"]');
    MayorEdad.textContent = 'La mayor edad es: ' + mayorNumero
    let MenorEdad = document.querySelector('[name="menorEdad"]');
    MenorEdad.textContent = 'La menor edad es: ' + menorNumero
}
function mostrarResultados(){
    const datosCalculados = document.querySelector('#datosCalculados')
    datosCalculados.className = ''
}
function ocultarBotonCalculo(){
    const botonCalcular = document.querySelector('#calcular')
    botonCalcular.className = 'oculto'
}
function ocultarResultados(){
    const datosCalculados = document.querySelector('#datosCalculados')
    datosCalculados.className = 'oculto'
}
function validarcantidadIntegrantes(){
    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value)
    const recuadroCantidadIntegrantes = document.querySelector('#cantidad-integrantes')
    if(cantidadIntegrantes <= 0){
        recuadroCantidadIntegrantes.className= 'error'
        return 'La cantidad de Integrantes no puede ser menor que 0'
    }else{
        recuadroCantidadIntegrantes.className= ''
        return ''
    }
}
function mostrarErrorCantidadIntegrantes(){
    const errorCantidadIntegrantes = document.querySelector('#errorCantidad')
    errorCantidadIntegrantes.className = 'alert alert-danger alertaCantidad'
}
function ocultarErrorCantidadIntegrantes(){
    const errorCantidadIntegrantes = document.querySelector('#errorCantidad')
    errorCantidadIntegrantes.className = 'oculto'
}
function validarEdadIntegrante(){
    let erroresEdadIntegrantes = 0
    edadesList.forEach(function(edad){
        if(edad <= 0){
            erroresEdadIntegrantes++;
        } 
    })
    if(erroresEdadIntegrantes > 0){
        return 'La edad de todos los integrantes debe ser mayor que cero'
    }else{
        return ''
    }
}
function mostrarErrorEdadIntegrantes(){
    const errorEdadIntegrantes = document.querySelector('#errorEdad')
    errorEdadIntegrantes.className = 'alert alert-danger alertaEdad'
}
function ocultarErrorEdadIntegrantes(){
    const errorEdadIntegrantes = document.querySelector('#errorEdad')
    errorEdadIntegrantes.className = 'oculto'
}
