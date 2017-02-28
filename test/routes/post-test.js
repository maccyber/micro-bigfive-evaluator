'use strict'

const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')
const expectedResults = require('../lib/data/results.json')
const payload = {
  'timeElapsed': -51,
  'ip': '127.0.0.1',
  'lang': 'en',
  'test': '50-IPIP-NEO-PI-R',
  'totalQuestions': 50,
  'answers': [
    {
      'domain': 'A',
      'facet': '1',
      'score': '3'
    },
    {
      'domain': 'A',
      'facet': '1',
      'score': '3'
    },
    {
      'domain': 'E',
      'facet': '1',
      'score': '3'
    },
    {
      'domain': 'E',
      'facet': '2',
      'score': '3'
    }
  ]
}

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns expected tests from POST', async t => {
  const url = await getUrl(srv)
  const result = await axios.post(`${url}`, payload)
  t.deepEqual(result.data, expectedResults, 'POST ok')
})
