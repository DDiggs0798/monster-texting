var mocha = require('mocha')
var expect = require('chai').expect
var { describe, it } = mocha
const messenger = require('../monster-messenger')



//TDD = test driven development
describe('Christmas Monster text generator', () => {
    it('Generates a scary text for all monsters', () => {
        let message = messenger.getRandomMessage()
        let statementFound = false;
        
        messenger.monsterData.forEach( (monster) => {
            const monsterMatches = monster.spookyText.filter( (statement) => {
                return statement === message
            })
            if (monsterMatches.length > 0) {
                statementFound = true
            }
        })

        expect(statementFound).to.equal(true)
        //expect(message === expectedMessage).to.equal(true)
        //both of the above 'expect's give the same results just different forms of syntax.
    })

    xit('does not send more than one text per hour', () => {

    })

    xit('does not send messages from blacklisted monsters', () => {
    })
})
