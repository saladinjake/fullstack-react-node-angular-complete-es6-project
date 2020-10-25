import  { App } from '../../../api/server';
import  app from '../../../app';
import chai, {
  expect
} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('App class and app server instance', () => {

  before((done) =>{
    const appInstance = new App()

    done()
  })

  beforeEach((done) =>{

    done()
  })

})
