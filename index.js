const brain = require('brain.js')
//const data = require('./data.json')
//for network//
const network = new brain.recurrent.LSTM()
//function to prepare data to train model//
let mockData = data.map((que) => ({
    input: que.question,
    output: que.category
}))
//to train model with data//
network.train(mockData, {
    iterations: 200
})

let attempt = network.run("illustrator keeps crashing")
console.log(`Category: ${attempt}`)
