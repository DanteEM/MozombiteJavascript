let nombredeAlumno = prompt ("Introduzca su nombre")
function saludar (Nombre) {
    alert ("Bienvenido Alumno " + Nombre)
}
saludar (nombredeAlumno)


let nota1 = parseInt(prompt("Ingrese su nota del Primer Examen"));


for (let i = 0; i < 5; i++) {
    if (nota1 <= 20) {
        break;
    }
    else{
        nota1 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }
    
}
let nota2 = parseInt (prompt ("Ingrese su nota del Segundo Examen") );
for (let i = 0; i < 5; i++) {
    if (nota2 <= 20) {
        break;
    }
    else{
        nota2 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }
    
}
let nota3 = parseInt (prompt ("Ingrese su nota del Tercero Examen") );
for (let i = 0; i < 5; i++) {
    if (nota3 <= 20) {
        break;
    }
    else{
        nota3 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }
    
}
let nota4 = parseInt (prompt ("Ingrese su nota del Cuarto Examen") );
for (let i = 0; i < 5; i++) {
    if (nota4 <= 20) {
        break;
    }
    else{
        nota4 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }
    
}


function sumaYDivision (Nota1, Nota2, Nota3, Nota4){
    return (Nota1 + Nota2 + Nota3 + Nota4) / 4 ;
}
let resultado = sumaYDivision (nota1, nota2, nota3, nota4);
alert ("Tu calificacion final es " + resultado)

if (resultado >= 11){
    alert("Felicidades! Estas aprobado")
}
else {
    alert ("Mis mas sinceras penas, estas desaprobado")
}





class Notas {
    constructor (nombre, nota){
        this.nombre = nombre.toUpperCase();
        this.nota = nota
    }
}
const primerExamen = new Notas ("Primer Examen", nota1)
const segundoExamen = new Notas ( "Segundo Examen", nota2)
const tercerExamen = new Notas ("Tercer Examen", nota3)
const cuartoExamen = new Notas ("Cuarto Examen", nota4)

const examenes = [];
examenes.push(primerExamen);
examenes.push(segundoExamen);
examenes.push(tercerExamen);
examenes.push(cuartoExamen);

console.log (examenes);
for (let Notas of examenes){
    console.log(Notas);
}

const listaDeNotas = ["Estas son las notas de tu primer hasta el ultimo examen", nota1, nota2, nota3, nota4]
alert(listaDeNotas.join("\n"))

