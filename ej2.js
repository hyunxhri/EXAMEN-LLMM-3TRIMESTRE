const nombresArray = []
const dnisArray = []
const correosArray = []

const validaNombre = (nombre) => {
    let nombreRegex = /^.{3,}$/
    if (nombre.match(nombreRegex)) return true
    else return false
}

const validaDNI = (dni) => {
    let dniRegex = /^\d{8}[a-zA-Z]$/
    if (dni.match(dniRegex)) return true
    else return false
}

const validaCorreo = (correo) => {
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (correo.match(correoRegex)) return true
    else return false
}

const form = () => {
    event.preventDefault()

    let nombre = document.forms["formulario"]["nombre"].value
    let dni = document.forms["formulario"]["dni"].value
    let correo = document.forms["formulario"]["email"].value

    if(!validaNombre(nombre)){
        alert("El nombre no es correcto.")
        return
    } 

    if(!validaDNI(dni)){
        alert("El DNI no es correcto.")
        return
    }

    if(!validaCorreo(correo)){
        alert("El correo no es correcto.")
        return
    }

    nombresArray.push(nombre)
    dnisArray.push(dni)
    correosArray.push(correo)

    filaTabla = document.getElementById("cuerpoTabla").insertRow(-1)
    filaTabla.insertCell(0).innerHTML = nombre
    filaTabla.insertCell(1).innerHTML = dni
    filaTabla.insertCell(2).innerHTML = correo

}

const listarArray = () => {
    let nuevaVentana = window.open()
    nuevaVentana.document.write(`Nombres: ${nombresArray} <br>DNIs: ${dnisArray} <br>Correos: ${correosArray}`)
}