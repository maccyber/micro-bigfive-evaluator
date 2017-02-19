'use strict'

const tap = require('tap')
const calculateScore = require('../../lib/calculate-score')
const answers = require('./data/50-test-results.json')

const score = calculateScore(answers)

tap.equal(score['E'].score, 31, 'It calculates 31 for E')

tap.equal(score['E'].result, 'high', 'It calculates high result for E')

tap.equal(score['A'].score, 30, 'It calculates 30 for A')

tap.equal(score['A'].result, 'neutral', 'It calculates neutral result for A')

tap.equal(score['C'].score, 31, 'It calculates 31 for C')

tap.equal(score['C'].result, 'high', 'It calculates high result for C')

tap.equal(score['N'].score, 21, 'It calculates 21 for N')

tap.equal(score['N'].result, 'low', 'It calculates low result for N')

tap.equal(score['O'].score, 33, 'It calculates 33 for O')

tap.equal(score['O'].result, 'high', 'It calculates high result for O')

