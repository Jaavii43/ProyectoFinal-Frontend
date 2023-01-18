export class Sobremi {

    id?:number;
    nombre:String;
    posicion:String;
    descripcion:String;
    imagen:String; 

    constructor(nombre: String, posicion: String, descripcion: String, imagen: String){

        this.nombre = nombre;
        this.posicion = posicion;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

