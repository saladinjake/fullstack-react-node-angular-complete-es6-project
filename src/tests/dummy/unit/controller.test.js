import { DummyController } from '../../../controllers/dummy/dummy.controller'
import chai, {
  expect
} from 'chai';
import sinon from 'sinon'
import { responseMock, requestMock } from  '../../../test-util/interceptors'
const flushPromises = () => new Promise(setImmediate);

describe('App class and app server instance', () => {
  afterEach(() => {
    sinon.restore();
  });
  // required for all tests
    const appInstance = new DummyController()
  it("Should create an instance of Dummy controller", (done) =>{
    expect(appInstance).to.be.an.instanceof(DummyController)
    expect(appInstance).to.not.have.property('bpress');
    done()
  })


  it('should create', async () => {
    const appInstance = new DummyController()
    const mResult = 'success';
    let apiCall = sinon.spy(responseMock, 'json');
    DummyController.save(requestMock, responseMock);
  

  });







})
