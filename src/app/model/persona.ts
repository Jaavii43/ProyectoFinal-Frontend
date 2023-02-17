export class Persona {

    id?: number;
    nombre:string;
    apellido:string;
    descripcion:string;
    titulo:string;
    anio:string;
    email:string;
    clave:string;

    constructor(imagen1: string, imagen2: string, imagen3: string, imagen4: string, nombre: string, apellido: string, descripcion: string, titulo: string, anio: string, email:string, clave:string){

        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.anio = anio;
        this.email = email;
        this.clave = clave;
    }
}
