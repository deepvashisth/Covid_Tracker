from flask import Flask

app = Flask(__name__)

# Define a route to fetch the available articles



@app.route("/sentiment")
def sentiment():
   return "hello deep vashisith"


if __name__ == "__main__":
    app.run(debug=True)
