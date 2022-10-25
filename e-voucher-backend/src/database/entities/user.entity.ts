import { Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne, JoinColumn} from "typeorm";
import { Afiliado } from "./afiliado.entity";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    usr_id: number;

    @Column({ length: 20 })
    usr_login: string

    @Column({ length: 20 })
    usr_password: string

    @Column({ length: 10 })
    usr_estado: string

    @ManyToOne(() => Afiliado, (Afiliado) => Afiliado.user)
    @JoinColumn({name: "urs_afl_id"})
    afiliado?: Afiliado

    constructor() {
        this.usr_id = 0
        this.usr_login = ""
        this.usr_password = ""
        this.usr_estado = ""
    }
}