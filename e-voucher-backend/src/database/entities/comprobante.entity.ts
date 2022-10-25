import { Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany } from "typeorm"
import { ComprobanteAnticipo } from "./comprobante_anticipo.entity"

@Entity({name: "comprobante"})
export class Comprobante {
    @PrimaryGeneratedColumn()
    cpec_id: number

    @Column({length: 2})
    cpec_tipocomprobante: string

    @Column({length: 4})
    cpec_serie: string

    @Column()
    @Generated("increment")
    cpec_correlativo: number

    @Column({type: "timestamptz"})
    cpec_emision: Date

    @Column({type: "date"})
    cpec_fechaemision: Date

    @Column({type: "time"})
    cpec_horaemision: Date

    @Column({length: 3})
    cpec_tipomoneda: string

    @Column({length: 4})
    cpec_tipodeoperacion: string

    @Column()
    cpec_tdoreceptor: number

    @Column({length: 15})
    cpec_ndoreceptor: string

    @Column({length: 100})
    cpec_nombrereceptor: string

    @Column({length: 100})
    cpec_direccion: string

    @Column({length: 45})
    cpec_urbanizacion: string

    @Column({length: 6})
    cpec_ubigeo: string

    @Column({length: 2})
    cpec_pais: string

    @OneToMany(() => ComprobanteAnticipo, (ComprobanteAnticipo) => ComprobanteAnticipo.comprobante)
    comprobanteAnticipos?: ComprobanteAnticipo[]

    constructor() {
        this.cpec_id = 0
        this.cpec_tipocomprobante = ""
        this.cpec_serie = ""
        this.cpec_correlativo = 0
        this.cpec_emision = new Date()
        this.cpec_fechaemision = new Date()
        this.cpec_horaemision = new Date()
        this.cpec_tipomoneda = ""
        this.cpec_tipodeoperacion = ""
        this.cpec_tdoreceptor = 0
        this.cpec_ndoreceptor = ""
        this.cpec_nombrereceptor = ""
        this.cpec_direccion = ""
        this.cpec_urbanizacion = ""
        this.cpec_ubigeo = ""
        this.cpec_pais = ""
    }
}