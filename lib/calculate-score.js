'use strict'

const reduceFactors = (a, b) => {
  if (!a[b.domain]) {
    a[b.domain] = {score: 0, facet: {}}
  }

  a[b.domain].score += parseInt(b.score || 0, 10)

  if (b.facet) {
    if (!a[b.domain].facet[b.facet]) {
      a[b.domain].facet[b.facet] = {score: 0}
    }
    a[b.domain].facet[b.facet].score += parseInt(b.score || 0, 10)
  }

  return a
}

module.exports = data => {
  if (!data) {
    return {error: 'Missing required input'}
  }

  if (!Array.isArray(data)) {
    return {error: 'Wrong format. Data must be an array'}
  }

  return data.reduce(reduceFactors, {})
}
