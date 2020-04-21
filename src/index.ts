import 'reflect-metadata'
import express from 'express'
import bodyParse from 'body-parser'
import { useExpressServer } from 'routing-controllers'
import AuthController from './controllers/Auth'
require('dotenv').config()




// Create a new express app instance
const app: express.Application = express();

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

useExpressServer(app, { // register created express server in routing-controllers
  controllers: [AuthController], // and configure it the way you need (controllers, validation, etc.)
  classTransformer: true,
  validation: true
});


app.listen(process.env.PORT, function () {
console.log(`App is listening on port ${process.env.PORT}!!!`);
});