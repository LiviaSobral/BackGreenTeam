import { Request, Response } from 'express'
import { LeitoService } from '../services/LeitoService'

const service = new LeitoService()

export class LeitoController{
    async create(req:Request, res:Response){
        try{
            const leito = await service.create(req.body)
            res.json(leito)
        }catch(e:any){
            res.status(400).json({message:e.message})
        }
    }
    async getByName(req: Request, res: Response){
        try{
            const leito = await service.findByName(req.body.name)
            res.json(leito)
        }catch(e:any){
            res.status(400).json({message: e.message})
        }
    }
    async findAll(req:Request, res:Response){
        try{
            const leitos = await service.findAll()
            res.json(leitos)
        }catch(e:any){
            res.status(400).json({message: e.message})
        }
    }
    async getById(req:Request,res:Response){
        try{
            const leito = await service.findById(req.body.id)
            res.json(leito)
        }catch(e:any){
            res.status(400).json({message: e.message})
        }
    }
    async update(req:Request,res:Response){
        try{
            const leito = await service.update(req.body.name, req.body.beingUsed, req.body.totalAmount)
            res.json(leito)
        }catch(e:any){
            res.status(400).json({message: e.message})
        }
    }
    async remove(req:Request,res:Response){
        try{
            const result = await service.remove(req.body.name)
            res.json(result)
        }catch(e:any){
            res.status(404).json({message: e.message})
        }
    }
}