from flask import Flask
from flask import jsonify
import tweepy

import Analysis

app = Flask(__name__)

# Define a route to fetch the available articles



   


@app.route("/")
def hello():
   return Analysis.getTweets()
   

@app.route("/sentiment")
def sentiment():
   data = {
            "employess" : ["Avadhesh","deep","Ashish"],
            
        }
   return jsonify(data)




if __name__ == "__main__":
    app.run(debug=True)