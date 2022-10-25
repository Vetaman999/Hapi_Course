import { Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany } from "typeorm";
import { User } from "./user.entity";


@Entity({ name: 'afiliados' })
export class Afiliado {
    @PrimaryGeneratedColumn()
    afl_id: number;

    @Column()
    afl_tipoidentidad: number

    @Column()
    afl_nroidentidad: number

    @Column({ length: 20 })
    afl_nombre: string

    @Column({ length: 20 })
    afl_comercial: string

    @Column({ length: 20 })
    afl_direcion: string

    @Column({ length: 20 })
    afl_ubigueo: string

    @Column({ length: 20 })
    afl_nombrecontacto: string

    @Column({ length: 10 })
    afl_telefonocontacto: string

    @Column({ length: 10 })
    afl_emailcontacto: string

    @Column({ length: 10 })
    afl_estado: string

    @Column({type: "date"})
    afl_activo: Date

    @Column({type: "date"})
    afl_inactivo: Date

    @OneToMany(() => User, (User) => User.afiliado)
    user?: User[]

    constructor() {
        this.afl_id = 0
        this.afl_tipoidentidad = 0
        this.afl_nroidentidad = 0
        this.afl_nombre = ""
        this.afl_comercial= ""
        this.afl_direcion= ""
        this.afl_ubigueo= ""
        this.afl_nombrecontacto= ""
        this.afl_telefonocontacto = ""
        this.afl_emailcontacto = ""
        this.afl_estado = ""
        this.afl_activo = new Date()
        this.afl_inactivo = new Date()
    }
}