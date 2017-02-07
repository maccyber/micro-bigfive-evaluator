'use strict'

const tap = require('tap')
const calculateScore = require('../../lib/calculate-score')
const facetData = require('./data/facet-test-data.json')
const facetExpected = require('./data/facet-test-result.json')
const facet = calculateScore(facetData)

tap.equal(JSON.stringify(facetExpected), JSON.stringify(facet), 'returns expected result')
