from flask import Flask
from flask import jsonify

app = Flask(__name__)

# Define a route to fetch the available articles



@app.route("/sentiment")
def sentiment():
   data = {
            "employess" : ["Avadhesh","deep","Ashish","Divyanshi"],
            
        }
   return jsonify(data)




if __name__ == "__main__":
    app.run(debug=True)