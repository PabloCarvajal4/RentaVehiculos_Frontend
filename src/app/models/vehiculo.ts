export class Vehiculo {
    _id?: string;
    placa: string | undefined;
    marca: string | undefined;
    modelo: string | undefined;
    anio: number | undefined;
    transmision: string | undefined;
    color : string | undefined;
    tipo : string | undefined;
    zona: string | undefined;

    constructor(placa: string, marca: string, modelo: string, anio: number, transmision: string, color: string, tipo: string, zona: string ){
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.transmision = transmision;
        this.color = color;
        this.tipo = tipo;
        this.zona = zona;
    }
}