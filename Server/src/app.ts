import express,{
  Request,
  Response
} from 'express'
import {
  Dialect,
  Sequelize
} from 'sequelize'

require('dotenv').config()

const app = express()
const port : string = process.env.PORT || '4000' 

interface SequelizeConfig {
  DATABASE: string;
  USERNAME: string;
  PASSWORD: string;
  HOST: string;
  DIALECT: Dialect;
}

// Set Config values from .env file
const sequelizeConfig: SequelizeConfig = {
  DATABASE: process.env.DATABASE || '',
  USERNAME: 'root',
  PASSWORD: process.env.PASSWORD || '',
  HOST: process.env.HOST || '',
  DIALECT: process.env.DIALECT as Dialect || '',
};

const sequelize = new Sequelize(sequelizeConfig.DATABASE, sequelizeConfig.USERNAME, sequelizeConfig.PASSWORD, {
  host: sequelizeConfig.HOST,
  dialect: sequelizeConfig.DIALECT
});

// async function testConnection(){
//   try {
//     console.log('My credentials : ',sequelizeConfig)
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database',error)
//   }
// }

// test connection middleware
// app.use((req: Request, res: Response, next) => {
//   console.log('Connection test at : ', Date.now())
//   testConnection()
//   next()
// })

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})