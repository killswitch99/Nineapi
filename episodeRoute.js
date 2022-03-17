import express from 'express'
const router = express.Router()
import { fomatItem } from './controllers/episodeController.js'

router.route('/').get(fomatItem)

export default router
