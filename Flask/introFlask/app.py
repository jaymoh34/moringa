from flask import Flask, send_file
import os

app = Flask(__name__)

# Get the absolute path of the directory where this app.py file is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route("/")
def home():
    return "Hello this is my flask server"

@app.route("/about")
def about():
    return "This is the about us section"

@app.route("/pic")
def get_pic():
    # Construct the exact path to the image using the BASE_DIR
    file_path = os.path.join(BASE_DIR, "one.png")
    return send_file(file_path)

if __name__ == "__main__":
    app.run(debug=True)