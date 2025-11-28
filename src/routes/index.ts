import { Router } from 'express'
import leitoRoutes from './leito.routes'

const router = Router()

router.use('/leitos', leitoRoutes)

export default router