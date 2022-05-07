import tweepy
import creds
from flask import jsonify
import pandas as pd 

def getVaccineTweets():
   rows =  [] 
   dicta = {}
   client = tweepy.Client(bearer_token=creds.TwitterBearerToken)
   query = 'vaccine -is:retweet'
   vaccines = tweepy.Paginator(client.search_recent_tweets, query=query,
                              tweet_fields=['context_annotations', 'created_at','lang'], max_results=100).flatten(limit=15000)
   
   for vaccine in vaccines:
      dicta.update({ vaccine.text :vaccine['lang'] } )
   
   for i in dicta:
      if dicta[i] == "en":
         rows.append(i)

   df = pd.DataFrame(rows)
   df.to_csv('Vaccine.csv', index=False)

   # np.savetxt("tweets.csv", rows, delimiter=",", fmt="% s")

   return jsonify(rows)

