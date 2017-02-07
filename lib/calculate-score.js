'use strict'

const reduceFactors = (a, b) => {
  a[b.domain] = a[b.domain] || 0
  a[b.domain] += parseInt(b.score || 0, 10)

  if (b.facet) {
    a[b.domain][b.facet] = a[b.domain][b.facet] || 0
    a[b.domain][b.facet] += parseInt(b.score || 0, 10)
  }

  return a
}

module.exports = data => {
  if (!data) {
    return {error: 'Missing required input'}
  }

  if (!Array.isArray(data)) {
    return {error: 'Wrong format. Data must med an array'}
  }

  return data.reduce(reduceFactors, {})
}
