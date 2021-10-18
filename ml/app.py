from flask import Flask, jsonify, request
import ast

import land_cover,optimized_path

app = Flask(__name__)

@app.route('/landcover/predict/<url>', methods=['POST'])
def landcover(url):
   return jsonify(land_cover.predict(url))


@app.route('/optimizedpath/predict/', methods=['POST'])
def optimizedpath():
   content = request.json
   url   = content['url']
   start = content['start']
   end   = content['end']
   return jsonify(optimized_path.predict(url,start,end))

if __name__ == '__main__':
   app.run(port=8000)
