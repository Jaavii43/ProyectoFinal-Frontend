export class Proyectos {

    id:any;
    tipo:string;
    sector:string;
    tiempo_ejecucion:string;

    constructor(tipo:string, sector:string,tiempo_ejecucion:string){
        this.sector = sector;
        this.tiempo_ejecucion = tiempo_ejecucion;
        this.tipo = tipo;
    }
}
