# Filename - server.py

from flask import Flask, jsonify
import datetime

app = Flask(__name__)

@app.route('/data')
def get_time():
    x = datetime.datetime.now()
    return jsonify({
        "Name": "geek",
        "Age": 22,
        "Date": x.strftime("%Y-%m-%d %H:%M:%S"),
        "programming": "python"
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
