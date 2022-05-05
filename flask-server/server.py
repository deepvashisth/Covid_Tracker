from flask import Flask
from flask import jsonify
import creds

app = Flask(__name__)

# Define a route to fetch the available articles


@app.route("/")
def hello():
   return creds.TwitterBearerToken
   

@app.route("/sentiment")
def sentiment():
   data = {
            "employess" : ["Avadhesh","deep","Ashish"],
            
        }
   return jsonify(data)




if __name__ == "__main__":
    app.run(debug=True)