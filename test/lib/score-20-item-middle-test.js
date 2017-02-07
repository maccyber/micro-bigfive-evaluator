'use strict'

const tap = require('tap')
const calculateScore = require('../../lib/calculate-score')
const answers = ['E', 'A', 'C', 'N', 'O']
                  .map(letter => Array.from({length: 20}, (v, i) => i).map(num => Object.assign({domain: letter, score: 3})))
                  .reduce((a, b) => a.concat(b), [])

const score = calculateScore(answers)

tap.equal(score['E'], 60, 'It calculates 60 for E')

tap.equal(score['A'], 60, 'It calculates 60 for A')

tap.equal(score['C'], 60, 'It calculates 60 for C')

tap.equal(score['N'], 60, 'It calculates 60 for N')

tap.equal(score['O'], 60, 'It calculates 60 for O')
