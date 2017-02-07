# micro-bigfive-evaluator

Example: https://bigfive-evaluator.now.sh/

micro webservice that calculates score of personality test questions

## Calculate score

```POST```

```/calculate```

```JavaScript
{
  lang: '<lang-code>',
  items: '<10 or 20>',
  answers: [
    {
      id: '<question-id>',
      score: '<question-score>'
    }
  ]
}
```

returns score for each factor

```JavaScript
{ 
  E: 30, 
  A: 30, 
  C: 30, 
  N: 30, 
  O: 30 
}
```

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/micro-bigfive-evaluator
```

## License
[MIT](LICENSE)

## About

Created by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

