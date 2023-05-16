export class Reserva {
    _id: String;
    restaurante: string;
    fecha: string;
    hora: string;
    cantidad: string;
    estado: string;

    constructor(_id:string, restaurante:string, fecha:string, hora:string, cantidad:string, estado:string){
        this._id = _id;
        this.restaurante = restaurante;
        this.fecha = fecha;
        this.hora = hora;
        this.cantidad = cantidad;
        this.estado = estado;
    }
}