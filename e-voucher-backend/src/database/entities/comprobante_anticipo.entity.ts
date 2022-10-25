import { Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne, JoinColumn } from "typeorm"
import { Comprobante } from "./comprobante.entity"

@Entity({name: "comprobante_anticipo"})
export class ComprobanteAnticipo {
    @PrimaryGeneratedColumn()
    cpeant_id: number

    @Column()
    cpeant_numero: number

    @Column({length: 5})
    cpeant_serie: string

    @Column()
    @Generated("increment")
    cpeant_correlativo: number

    @Column({length: 2})
    cpeant_tipoanticipo: string

    @Column({length: 2})
    cpeant_tipodocumento: string

    @Column({length: 15})
    cpeant_numerodocumento: string

    @Column({type: "money"})
    cpeant_montoprepagado: number

    @Column({type: "date"})
    cpeant_fechadepago: Date

    @ManyToOne(() => Comprobante, (comprobante) => comprobante.comprobanteAnticipos)
    @JoinColumn({name: "cpeant_cpec_id"})
    comprobante?: Comprobante

    constructor(){
        this.cpeant_id = 0
        this.cpeant_numero = 0
        this.cpeant_serie = ""
        this.cpeant_correlativo = 0
        this.cpeant_tipoanticipo = ""
        this.cpeant_tipodocumento = ""
        this.cpeant_numerodocumento = ""
        this.cpeant_montoprepagado = 0
        this.cpeant_fechadepago = new Date()
    }
}