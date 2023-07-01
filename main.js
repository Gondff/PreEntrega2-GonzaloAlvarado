
//Crear la clase estudiante

class Estudiante{
    constructor (nombre, apellido, dni,comision){
        this.nombre = nombre;
        this.apellido =apellido;
        this.dni = dni;
        this.comision = comision;
    }
}

function generarComision(estudiante){
    let numDni = parseInt(estudiante.dni);
    if(numDni %2 === 0){
        return estudiante.comision = 43125;
    }else{
        return estudiante.comsion = 43150;
    }
}

//crear el array donde se guardan
let curso = [];

//Funcion para agregar estudiante
function agregarEstudiante(){
    let nombre = prompt("Ingrese el nombre del estudiante:");
    let apellido = prompt("Ingrese el apellido del estudiante:");
    let dni = parseInt(prompt("Ingrese el DNI del estudiante:"));

    if((!nombre || !apellido || !dni)){
        alert("Debe ingresar todos los datos del estudiante")
    }else{
        const nuevoEstudiante = new Estudiante(nombre, apellido, dni);
        generarComision(nuevoEstudiante);

        curso.push(nuevoEstudiante);
        alert("se agrego correctamente el estudiante");
    }

}

//Funcion para listar los estudiantes
function listarEstudiantes(){
  if (curso.length === 0){
    return alert("no hay estudiantes para mostrar");
  }else{
    let datoseEstudiante = "Lista del curso \n\n";
    curso.forEach((estudiante) => {
        datoseEstudiante += `Nombre: ${estudiante.nombre}\n`;
        datoseEstudiante += `Apellido: ${estudiante.apellido}\n`;
        datoseEstudiante += `DNI: ${estudiante.dni}\n`;
        datoseEstudiante += `Comision: ${estudiante.comision}\n`;
        datoseEstudiante += `--------------------\n`;
    });
    return alert(datoseEstudiante);
  }
}

//Funcion para buscar estudiante por DNI
function buscarEstudiantePorDni(){
    let dniBuscado = prompt("Ingrese el DNI que desea buscar");

    let estudianteEncontrado = curso.find((estudiante) => estudiante.dni === dniBuscado);

    if(estudianteEncontrado){
        let datosDni = "Estudiante encontrado:\n\n";
        datosDni += `Nombre: ${estudianteEncontrado.nombre}\n`;
        datosDni += `Apellido: ${estudianteEncontrado.apellido}\n`;
        datosDni += `DNI: ${estudianteEncontrado.dni}\n`;
        datosDni += `Comision: ${estudianteEncontrado.comision}\n`;
        return alert(datosDni)
    }else{
        return alert("DNI no encontrado");
    }
}

//Funcion para la salida
function saludo(){
    alert("Hasta luego!");
}

//Menu de opciones

function opciones(){
    let opcion;

    while(opcion !== "4") {
    opcion = prompt(
        "Seleccione una opción:\n1. Ingresar un estudiante\n2. Listar todos los estudiantes\n3. Buscar un estudiante por su DNI\n4. Salir");
        
    
    switch (opcion){
        case "1":
            agregarEstudiante();
            break
        case "2":
            listarEstudiantes();
            break
        case "3":
            buscarEstudiantePorDni();
            break
        case "4":
            saludo();
            break
        default:
            alert("No ingresaste ninguna opcion valida");
            break
    }

    }
}

//LLamar a la funcion opciones

opciones();
