export class Factura {
    _id?: string;
    dniCliente: string | undefined;
    nombre: string | undefined;
    placa: string | undefined;
    marca: string | undefined;
    modelo: string | undefined;
    fechaInicio: string | undefined;
    fechaFinal : string | undefined;
    total : number | undefined;

    constructor(dniCliente: string, nombre: string, placa: string, marca:string, modelo: string, fechaInicio: string, fechaFinal: string, total: number){
        this.dniCliente = dniCliente;
        this.nombre = nombre;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.total = total;
    }
}