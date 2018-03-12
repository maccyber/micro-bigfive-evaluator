[![Build Status](https://travis-ci.org/maccyber/micro-bigfive-evaluator.svg?branch=master)](https://travis-ci.org/maccyber/micro-bigfive-evaluator)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-bigfive-evaluator

[![Greenkeeper badge](https://badges.greenkeeper.io/maccyber/micro-bigfive-evaluator.svg)](https://greenkeeper.io/)

Example: https://evaluator.bigfive.maccyber.io/

[micro](https://github.com/zeit/micro) webservice that calculates score of personality test questions

See [bigfive-web](https://github.com/maccyber/bigfive-web) for full repo.

## Calculate score

**POST**

Array with domain and score. Facet is optional.

```JavaScript
{
  "timeElapsed": -51,
  "ip": "127.0.0.1",
  "lang": "en",
  "test": "50-IPIP-NEO-PI-R",
  "totalQuestions": 50,
  "answers": [
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "2",
      "score": "3"
    }
  ]
}
```

returns score for each factor

```JavaScript
{
  "timeElapsed": -51,
  "ip": "127.0.0.1",
  "lang": "en",
  "test": "50-IPIP-NEO-PI-R",
  "totalQuestions": 50,
  "answers": [
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "2",
      "score": "3"
    }
  ],
  "data": {
    "A": {
      "score": 6,
      "count": 2,
      "result": "neutral",
      "facet": {
        "1": {
          "score": 6,
          "count": 2,
          "result": "neutral"
        }
      }
    },
    "E": {
      "score": 6,
      "count": 2,
      "result": "neutral",
      "facet": {
        "1": {
          "score": 3,
          "count": 1,
          "result": "neutral"
        },
        "2": {
          "score": 3,
          "count": 1,
          "result": "neutral"
        }
      }
    }
  }
}
```

## Deploy using [Now](https://zeit.co/now)

```bash
$ now https://github.com/maccyber/micro-bigfive-evaluator
```

## Related
- [bigfive-web](https://github.com/maccyber/bigfive-web) Web frontend for bigfive tests
- [micro-bigfive-questions](https://github.com/maccyber/micro-bigfive-questions) Webservice that returns bigfive questions
- [micro-bigfive-generator](https://github.com/maccyber/micro-bigfive-generator) Webservice that generates and saves results to bigfive-web
- [micro-bigfive-results](https://github.com/maccyber/micro-bigfive-results) Webservice that returns bigfive informative test results
- [micro-bigfive-save](https://github.com/maccyber/micro-bigfive-save) Webservice that stores bigfive answers

## License
[MIT](LICENSE)

## About

Created with <3 by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![alt text](https://robots.kebabstudios.party/zrrrzzt.png "Robohash image of zrrrzzt") 
![alt text](https://robots.kebabstudios.party/maccyber.png "Robohash image of maccyber")
