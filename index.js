'use strict'

const { parse } = require('url')
const { json, send } = require('micro')
const readFileSync = require('fs').readFileSync
const marked = require('marked')
const calculateScore = require('./lib/calculate-score')

module.exports = async (req, res) => {
  let result = {}
  const {query} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query
  if (req.method === 'POST') {
    result = calculateScore(data)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    result = marked(readme)
  }
  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
