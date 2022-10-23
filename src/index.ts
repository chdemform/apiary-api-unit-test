import cors from 'cors'
import express from 'express'
import { config } from '~/config'
import { routerBees } from './controllers/bee.controller';
import { errorHandler } from './middlewares/error.handler';


let helloWorld = function() {
    return 'Hello world !';
}

/**
 * On créé une nouvelle "application" express
 */
const app = express()

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json())

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
app.use(cors())

app.use(routerBees);


app.get('/hello', (req, res) => {
    res.send(helloWorld())
  })

  app.use(errorHandler);

/**
 * On demande à Express d'ecouter les requêtes sur le port défini dans la config
 */
app.listen(config.API_PORT, () => console.log('Running.'))

