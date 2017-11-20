# retweet-draw

> A draw among retweets. Given a tweet id, logs a random user that retweeted the referenced tweet.

## Why
If you ever needed to do a draw among retweeters, you understand why.

## Install
```bash
yarn global add retweet-draw

# or, if using npm
npm install -g retweet-draw
```

## Setup
You need to create a `.env` file containing the variables
- `TWITTER_ACCESS_TOKEN_KEY`
- `TWITTER_ACCESS_TOKEN_SECRET`
- `TWITTER_CONSUMER_KEY`
- `TWITTER_CONSUMER_SECRET`

You will get those by creating a twitter app. If you don't the program will let you know anyways, thanks to [lookenv](https://github.com/RodrigoEspinosa/lookenv).

## License
MIT © [Ignacio Álvarez](http://github.com/nachoaIvarez)
