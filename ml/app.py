from flask import Flask, jsonify, request
import ast

import land_cover,optimized_path

app = Flask(__name__)

@app.route('/landcover/predict/<url>', methods=['POST'])
def landcover(url):
   return jsonify(land_cover.predict(url))


@app.route('/optimizedpath/predict/', methods=['GET'])
def optimizedpath():
   url   = request.args.get('url').replace('"','')
   start = ast.literal_eval(request.args.get('start'))
   end   = ast.literal_eval(request.args.get('end'))
   return jsonify(optimized_path.predict(url,start,end))

if __name__ == '__main__':
   app.run(port=8000)
