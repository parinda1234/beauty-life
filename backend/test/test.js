const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const server = require('../server');

describe('User', () => {
    let logingData = {
        username: 'user',
        password: '123'
      };
      
      it('/user/login  Test', done => {
        request(server.app)
          .post('/user/login')
          .send(logingData)
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.status).to.equal(200);
            done();
          });
      });      
});


  
  describe('/signup', () => {

    let signupdata = {
        name: 'Rayan',
        address: 'negombo',
        email: 'Rayan@gmail.com',
        mobile: '0786543212',
        username: 'rayan',
        password: '12345'
      };
    it('/user/create user register', (done) => {
      request(server.app)
        .post('/user/create')
        .send(signupdata)
        .expect(200)
        .end(done);
    });
  });

  describe('feedback :', () => {          
    it('TEST', done => {
        request(server.app)
          .get('/appoinment/getAll')
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            expect(res.status).to.equal(200);
            done();
          });
      }); 
});