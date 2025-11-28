import { Router } from 'express'
import { LeitoController } from '../controllers/LeitoController'

const router = Router()
const controller = new LeitoController()

router.post('/',controller.create.bind(controller))
router.put('/byname', controller.getByName.bind(controller))
router.get('/', controller.findAll.bind(controller)) 
router.put('/', controller.update.bind(controller)) 
router.delete('/',controller.remove.bind(controller)) 

export default router