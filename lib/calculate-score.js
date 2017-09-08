'use strict'

const getResult = (score, count) => {
  const average = score / count
  let result = 'neutral'
  if (average > 3) {
    result = 'high'
  } else if (average < 3) {
    result = 'low'
  }
  return result
}

const reduceFactors = (a, b) => {
  if (!a[b.domain]) {
    a[b.domain] = {score: 0, count: 0, result: 'neutral', facet: {}}
  }

  a[b.domain].score += parseInt(b.score || 0, 10)
  a[b.domain].count += 1
  a[b.domain].result = getResult(a[b.domain].score, a[b.domain].count)

  if (b.facet) {
    if (!a[b.domain].facet[b.facet]) {
      a[b.domain].facet[b.facet] = {score: 0, count: 0, result: 'neutral'}
    }
    a[b.domain].facet[b.facet].score += parseInt(b.score || 0, 10)
    a[b.domain].facet[b.facet].count += 1
    a[b.domain].facet[b.facet].result = getResult(a[b.domain].facet[b.facet].score, a[b.domain].facet[b.facet].count)
  }

  return a
}

module.exports = data => {
  if (!data) {
    return {error: 'Missing required input data'}
  }

  if (!data.answers) {
    return {error: 'Missing required input data.answers'}
  }

  if (!Array.isArray(data.answers)) {
    return {error: 'Wrong format. Data.answers must be an array'}
  }

  return data.answers.reduce(reduceFactors, {})
}
