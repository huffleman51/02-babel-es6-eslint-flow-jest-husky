/* eslint-disable no-console */
import Dog from './Dog'

const str = 'ES6'
console.log(`Hello ${str}`)


// const Dog = require('./dog')


const toby = new Dog('Toby')

console.log(toby.bark())
