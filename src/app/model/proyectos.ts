export class Proyectos {

    id:number;
    tipo:string;
    sector:string;
    tiempo_ejecucion:string;
    valor:boolean;

    constructor(tipo:string, sector:string, tiempo_ejecucion:string, valor:boolean){
        this.sector = sector;
        this.tiempo_ejecucion = tiempo_ejecucion;
        this.tipo = tipo;
        this.valor = valor;
    }
}
