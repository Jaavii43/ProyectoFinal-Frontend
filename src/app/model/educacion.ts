export class Educacion {

    id:number;
    escuela:String;
    titulo:String;
    fecha_inicio:String;
    fecha_fin:String;
    descripcion:String; 

    constructor(escuela:string, titulo:string, fecha_inicio:string, fecha_fin:string, descripcion:string ){

        this.escuela = escuela;
        this.titulo = titulo;
        this.fecha_fin = fecha_fin;
        this.fecha_inicio = fecha_inicio; 
        this.descripcion = descripcion ;      
        
    }
}
