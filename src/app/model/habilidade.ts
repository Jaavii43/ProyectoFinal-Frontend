export class Habilidade {

    id:number;
    area:string;
    porcentaje:number;  

    constructor(area:string, porcentaje:number, id:number){

        this.area = area;
        this.porcentaje = porcentaje;
        this.id=id;
    }
}
