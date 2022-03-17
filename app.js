import express from 'express'
import dotenv from 'dotenv'
import episodeRoute from './episodeRoute.js'

const app = express()
dotenv.config()
//middleware
app.use(express.json())

//Routes
app.use('/', episodeRoute)

const PORT = process.env.PORT

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mdoe on port ${PORT}`
	)
)
export default app
