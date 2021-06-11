const arregloEstudiantes = [
    new Estudiante('Irving Gregorio', 'Lopez Torres'),
    new Estudiante('Sheila','Montero Prieto')      
]

function mostrarEstudiantes(){
    let texto = ''
    for(let item of arregloEstudiantes){
        texto += `<li>${item.nombre} ${item.apellido}</li>`
    }
    document.getElementById('alumnos').innerHTML = texto
}

function agregarEstudiante(){
    const formulario = document.forms["formulario"]
    const nombre = formulario["nombre"]
    const apellido = formulario["apellido"]
    const objEstudiante = new Estudiante(nombre.value,apellido.value)
    arregloEstudiantes.push(objEstudiante)
    alert("Estudiante agregado")
    mostrarEstudiantes()
}