import tweepy
import creds
from flask import jsonify


def getTweets():
   lista = []
   client = tweepy.Client(bearer_token=creds.TwitterBearerToken)
   query = 'covid -is:retweet'
   tweets = client.search_recent_tweets(query=query, tweet_fields=['context_annotations', 'created_at'], max_results=20)

   for tweet in tweets.data:
      lista.append(tweet.text)

   return jsonify(lista)

