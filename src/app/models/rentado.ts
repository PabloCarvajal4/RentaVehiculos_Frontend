export class Rentado {
    _id?: string;
    placa: string | undefined;
    marca: string | undefined;
    modelo: string | undefined;
    anio: number | undefined;
    transmision: string | undefined;
    color : string | undefined;
    tipo : string | undefined;
    zona: string | undefined;
    tiempoRenta: Number | undefined;
    fechaInicio: string | undefined;
    fechaFinal: string | undefined;

    constructor(placa: string, marca: string, modelo: string, anio: number, transmision: string, color: string, tipo: string, zona: string, tiempoRenta: Number, fechaInicio: string, fechaFinal: string){
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.transmision = transmision;
        this.color = color;
        this.tipo = tipo;
        this.zona = zona;
        this.tiempoRenta = tiempoRenta;
        this.fechaInicio = fechaInicio;
        this.fechaFinal =fechaFinal;
    }
}