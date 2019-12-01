const monsterData = require('./christmas-monsters.json.js')
const randomArrayIndex = require('random-array-index')

function getRandomMessage () {
    const monsterIdx = randomArrayIndex(monsterData)
    const monster = monsterData[monsterIdx]
    const statement = monster.spookyText[0]
    
    return statement
}

module.exports = {
    getRandomMessage,
    monsterData
    
}
