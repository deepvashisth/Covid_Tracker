from flask import Flask
from flask import jsonify
import tweepy
import creds
import getCovidTweets
import getVaccineTweets
import covidTweetsAnalysis
app = Flask(__name__)

# Define a route to fetch the available articles



   


@app.route("/")
def hello():
   return " CovidAnalysis.getCovidTweets()"
   

@app.route("/sentiment")
def sentiment():
   data = {
            "employess" : ["Avadhesh","deep"],
            
        }
   return jsonify(data)




if __name__ == "__main__":
    app.run(debug=True)