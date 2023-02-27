export class Sobremi {

    id?:number;
    nombre:String;
    posicion:String;
    descripcion:String;
    imagen:String;
    email:String;
    clave:String; 

    constructor(nombre: String, posicion: String, descripcion: String, imagen: String, email: String, clave:String){

        this.nombre = nombre;
        this.posicion = posicion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.clave = clave;
        this.email = email;
    }
}

