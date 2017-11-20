# retweet-draw

> A draw among retweets. Given a tweet id, logs a random user that retweeted the referenced tweet.

## Why
If you ever needed to do a draw among retweeters, you understand why.

## Setup
Clone the repo and create a `.env` file containing the variables
- `TWITTER_ACCESS_TOKEN_KEY`
- `TWITTER_ACCESS_TOKEN_SECRET`
- `TWITTER_CONSUMER_KEY`
- `TWITTER_CONSUMER_SECRET`

You will get those by creating a twitter app. If you don't the program will let you know anyways, thanks to [lookenv](https://github.com/RodrigoEspinosa/lookenv).

## Usage (all equivalent)
```
$ node index.js <tweet url or id>
$ node index.js -t <tweet url or id>
$ node index.js --tweet <tweet url or id>
```

### Examples
```
$ node index.js https://twitter.com/nachoaIvarez/status/885233626643877888
> @jack

$ node index.js -t 885233626643877888
> @LuisSuarez9

$ node index.js -tweet https://twitter.com/nachoaIvarez/status/885233626643877888
> @horse_js
```

## License
MIT © [Ignacio Álvarez](http://github.com/nachoaIvarez)
