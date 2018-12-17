const index = require('../app')
const  should = require('should')
const supertest = require('supertest')
const db = require('../controllers/dbController.js')
const chai = require('chai')
const expect = chai.expect;


describe('Тесты', function(){

    it('Проверка зайти без авторизации на главную страницу', function(done){
        supertest('http://localhost:8080')
            .get('/user')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            })

    })

    it('Проверка зайти без авторизации на страницу покупок', function(done){
        supertest('http://localhost:8080')
            .get('/main')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            })

    })
    
    it('Проверка зайти без авторизации на страницу с описанием', function(done){
        supertest('http://localhost:8080')
            .get('/show')
            .expect(302)
            .end(function(err, res){
                res.status.should.equal(302)
                done()
            })

    })

    
    it('Проверка поиска кота по Id : ', async () => {
        let Cat = await db.findProductById('5c17f009fb6fc04dd6eec319')
        const result = Cat.Name
        expect(result).to.equal('Скотиш страйт')
    })
    

    it('Проверка поиска пользователя по токену : ', async () => {
        let User = await db.findUserByToken('google-oauth2|102091313664086237037')
        const result = User.FirstName + ' ' + User.LastName 
        expect(result).to.equal('Егор Митрофанов')
    })



})