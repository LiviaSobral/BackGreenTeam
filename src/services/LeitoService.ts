import { AppDataSource } from '../data-source'
import { Leitos } from '../entities/Leitos'

export class LeitoService {
    private repo = AppDataSource.getRepository(Leitos)

    async create(data: {name:string, totalAmount:number, beingUsed:number }){
        const exists = await this.repo.findOne({where:{name: data.name}})
        if(exists){
            throw new Error('Leito already exists')
        }
        const leito = this.repo.create(data)
        return await this.repo.save(leito)
    }

    async findById(id:number){
        const leito = await this.repo.findOne({where:{id:id}})
        if(!leito){
            throw new Error("Leito not found")
        }
        return leito
    }

    async update(name:string, beingUsed:number){
        const leito = await this.repo.findOne({where:{name:name}})
        if(!leito){
            throw new Error("Leito was not found")
        }
        leito.beingUsed = beingUsed
        return await this.repo.save(leito);
    }

    async findByName(name:string){
        const leito = await this.repo.findOne({where:{name: name}})
        if(!leito){
            throw new Error("Leito was not found")
        }
        return leito;
    }

    async remove(name:string){
        const leito = await this.repo.findOne({where:{name:name}})
        if(!leito){
            throw new Error("Leito was not found")
        }
        await this.repo.remove(leito);
        return {message: 'Leito deleted'}
    }
}