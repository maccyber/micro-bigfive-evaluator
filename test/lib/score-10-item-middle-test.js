'use strict'

const tap = require('tap')
const calculateScore = require('../../lib/calculate-score')
const answers = ['E', 'A', 'C', 'N', 'O']
                  .map(letter => Array.from({length: 10}, (v, i) => i).map(num => Object.assign({domain: letter, score: 3})))
                  .reduce((a, b) => a.concat(b), [])

const score = calculateScore(answers)

tap.equal(score['E'].score, 30, 'It calculates 30 for E')

tap.equal(score['A'].score, 30, 'It calculates 30 for A')

tap.equal(score['C'].score, 30, 'It calculates 30 for C')

tap.equal(score['N'].score, 30, 'It calculates 30 for N')

tap.equal(score['O'].score, 30, 'It calculates 30 for O')
