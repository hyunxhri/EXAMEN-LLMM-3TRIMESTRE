const validaNombre = () => {
    let nombre = document.forms["formulario"]["nombre"].value
    alert(nombre)
    let nombreRegex = /^.{3,}$/
    if (nombre.match(nombreRegex)) return true
    else return false
}

const validaDNI = () => {
    let dni = document.forms["formulario"]["dni"].value
    alert(dni)
    let dniRegex = /^\d{8}[a-zA-Z]$/
    if (dni.match(dniRegex)) return true
    else return false
}

const validaCorreo = () => {
    let correo = document.forms["formulario"]["email"].value
    alert(correo)
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (correo.match(correoRegex)) return true
    else return false
}

const form = () => {
    let validacionNombre = validaNombre()
    let validacionDNI = validaDNI()
    let validacionCorreo = validaCorreo()
    alert(validacionNombre)
    alert(validacionDNI)
    alert(validacionCorreo)
}