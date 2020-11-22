import dotenv from 'dotenv';
dotenv.config();
import express , { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';



import { BaseRouter } from '../routes/base.routes';



export class App{
  constructor(){
    this.express = express();
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({extended:false}))
    // this.express.disable('x-')
    this.appRouter = new BaseRouter();
    this.appRouter.init();

    this.routes = this.appRouter.getRouter();
    this.express.get('/', (request,response)=>{


      return response.status(200).json({
        status:200,
        message: "Live with turring senior software developer"
      })
    })
    this.port = process.env.PORT || 3001;
    this.express.use('api/v1', this.routes)
  }

  run(){
    this.express.listen(this.port,()=>{
      console.log("Turring api service for node js on port:"+ this.port)
    })
  }
}
