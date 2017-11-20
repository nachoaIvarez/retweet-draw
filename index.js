const dotenv = require('dotenv');
const lookenv = require('lookenv');
const minimist = require('minimist');
const randomItem = require('random-item');
const Twitter = require('twitter');

dotenv.config();
lookenv
  .validate()
  .then(() => {
    const client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });

    const HELP_TEXT = `
      Usage (all equivalent)
        $ retweet-draw <tweet url or id>
        $ retweet-draw -t <tweet url or id>
        $ retweet-draw --tweet <tweet url or id>

      Options
        --tweet, -t  Tweet URL or ID

      Examples
        $ retweet-draw https://twitter.com/nachoaIvarez/status/885233626643877888
        > @jack

        $ retweet-draw -t 885233626643877888
        > @LuisSuarez9

        $ retweet-draw -tweet https://twitter.com/nachoaIvarez/status/885233626643877888
        > @horse_js
    `;

    const args = minimist(process.argv.slice(2));
    const tweet = args['_'][0] || args.t || args.tweet;
    const tweetId = String(tweet)
      .split('/')
      .pop();

    if (args.hasOwnProperty('h') || args.hasOwnProperty('help')) {
      console.log(`${HELP_TEXT}`);
    } else if (!tweet) {
      console.error(`\n  Missing tweet ID or URL. \n${HELP_TEXT}`);
    } else {
      (async () => {
        try {
          const retweeters = await client.get('statuses/retweeters/ids', { id: tweetId });
          const userId = randomItem(retweeters.ids);
          const user = await client.get('users/show', { user_id: userId });
          console.log(`@${user['screen_name']}`);
        } catch (e) {
          console.error(`\n  Invalid tweet ID or URL. \n${HELP_TEXT}`);
        }
      })();
    }
  })
  .catch(console.error);
