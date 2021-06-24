'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { HealthController } from '../controllers'

const NirdoshRouter = new Express.Router()
const { get } = HealthController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

NirdoshRouter.use(extractHeaders)

NirdoshRouter.get('/', routeSanity, asyncWrapper(get))

NirdoshRouter.use(setHeaders)

export default NirdoshRouter
