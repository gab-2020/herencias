//Clase Padre = Estudiantes Universitarios

class Estudiantes {
    constructor (nombre, apellidos, edad, nacionalidad = "Española", facultad, campo_estudio ) {

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.facultad = facultad;
        this.campo_estudio = campo_estudio;
      
    }

// Métodos para clase Padre
id () {
    console.log (`El alumno se llama ${this.nombre} ${this.apellidos}, cuya edad es de ${this.edad} años
    y de nacionalidad ${this.nacionalidad}.Es estudiante de la facultad de ${this.facultad}, y se encuentra
    cursando la carrera de ${this.campo_estudio}.`);
}

}

//Clase hijos = Estudiantes matriculados y Estudiantes de intercambio

class EstudiantesMat extends Estudiantes {

    constructor (nombre, apellidos, edad, nacionalidad, facultad, campo_estudio, matricula){
        super (nombre, apellidos, edad, nacionalidad, facultad, campo_estudio);
        this.matricula = matricula;
          }

    id () {
        console.log (`El alumno se llama ${this.nombre} ${this.apellidos}, cuya edad es de ${this.edad} años
        y de nacionalidad ${this.nacionalidad}.Es estudiante de la facultad de ${this.facultad}, y se encuentra
        cursando la carrera de ${this.campo_estudio}. Su número de matrícula es ${this.matricula}.`);
          }
}

class EstudiantesInt extends Estudiantes {
    constructor (nombre, apellidos, edad, pais_origen, universidad_origen, campo_estudio){
        super (nombre, apellidos, edad, campo_estudio);
        this.pais_origen = pais_origen;
        this.universidad_origen = universidad_origen;
    }

    idInt () {
        console.log (`El alumno se llama ${this.nombre} ${this.apellidos}, cuya edad es de ${this.edad} años
        y su país de origen es ${this.pais_origen}.Es estudiante de la universidad de ${this.universidad_origen},
        y se encuentra cursando la carrera de ${this.campo_estudio}.`);
          }
}

//Instancias (Estudiantes, Estudiantes matriculados y Estudiantes de intercambio)

var Zaira = new Estudiantes ("Zaira", "Amado García", 26, "española", "Arquitectura", 
"Diseño de Indumentaria");
var Nicolas= new Estudiantes ("Nicolás", "Vespaciano", 29, "argentina", "Ingeniería", "Ingeniería electrónica");
var Noelia= new EstudiantesMat ("Noelia", "Madrazo Puentes", 26, "española", "Psicología", "Pedagogía Infantil", 2134.08 );
var Joan= new EstudiantesMat ("Joan", "Barceló", 23, "española", "Derecho", "Abogacía", 2256.07 );
var Matt= new EstudiantesInt ("Matt", "Thompson", 22, "Inglaterra", "Southampton University", "Ingeniería naval");
var Sara = new EstudiantesInt ("Sara", "Parisio", 27, "Italia", "Universidad di Bologna", "Filosofía");


