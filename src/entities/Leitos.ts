import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity("leitos")
export class Leitos{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    name:string // aq vai dizer se é leito de adulto ou algo assim, para poder diferneciar eles

    @Column()
    totalAmount:number //quantidade total de leitos, sendo usados ou não

    @Column()
    beingUsed:number //quantidade de leitos sendo usados atualmente (com as duas informações podemos calcular no front as porcentagens e o numero disponivel)

}
