import tweepy
import creds
from flask import jsonify
import pandas as pd 

def getTweets():
   fields = ['tweets'] 
   rows =  [] 

   dicta = {}
   client = tweepy.Client(bearer_token=creds.TwitterBearerToken)
   query = 'covid -is:retweet'
   tweets = client.search_recent_tweets(query=query,tweet_fields=['context_annotations', 'created_at','lang'], max_results=100)
   

   for tweet in tweets.data:
      dicta.update({ tweet.text :tweet['lang'] } )
   
   for i in dicta:
      if dicta[i] == "en":
         rows.append(i)

   df = pd.DataFrame(rows)
   df.to_csv('Tweets.csv', index=False)

   # np.savetxt("tweets.csv", rows, delimiter=",", fmt="% s")

   return jsonify(rows)

