'use strict'

const { json, send } = require('micro')
const readFileSync = require('fs').readFileSync
const marked = require('marked')
const calculateScore = require('./calculate-score')

module.exports.getFrontpage = async (request, response) => {
  const readme = readFileSync('./README.md', 'utf-8')
  const html = marked(readme)
  send(response, 200, html)
}

module.exports.calculateScore = async (request, response) => {
  const data = await json(request)
  data.data = calculateScore(data)
  send(response, 200, data)
}
