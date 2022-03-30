export interface Reservaciones {
    fecha:Date;
    id_cliente: number;
    id_mesa:number

}
export interface ReservacionesEl {

    id:number;
    fecha:Date;
    id_cliente: number;
    id_mesa:number

}


export interface ReservacionesMongo {

    _id: string;
    num_mesa:number;
    idMesa:number;
    ocupado: boolean;
    fecha:string;
    nombreCliente: string;

}