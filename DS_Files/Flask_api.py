import os
import json
from flask import Flask, jsonify, request, Response
from numpy import number
import Commfy_RBM as rbm
import pandas as pd
#from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True
#CORS(app)
outfits = {"sunglasses":(0,1),"neck":(1,2,3)}

module_dir = os.path.abspath(os.path.dirname(__file__))



@app.route("/doc")
def hello_world():
    return "<p>Hello, from Commfy!</p>\
    <p>this is the documentation to the Commfy Recommendation API </p>\
    <p> on http://127.0.0.1:5000/api/input you can see all possible input </p>\
    <p> on http://127.0.0.1:5000/api/outfits you can see all possible outfits </p>\
    <p> on http://127.0.0.1:5000/api/random_input_example you can see a possible input json </p>\
    <p> - the input is build like {'tripindex1' : {'location':'xxx','time':'xxx','heaviness_of_trip':'xxx','heat_preference':'xxx','sex':'xxx'}, 'trpindex2':{}} </p>\
    <p> on http://127.0.0.1:5000/api/random_output you can get a random output </p>\
    <p> - the output consits of 3 parts:</p>\
        <p> -- the clothes to wear now  (inside the [])</p>\
        <p> -- the clothes to bring in the backpack (inside the first {}) </p>\
        <p> -- the clothes to wear on each trip of the input (insdie the last {} starting with {'0':{...}}) </p>\
    <p> on http://127.0.0.1:5000/api/recommendation you can get the recommendation for your input </p> "

#give out the defined outfits
@app.route("/api/outfits", methods=["GET"])
def return_outfits():
    # Print the html
    
    return "<table>\
<thead><tr><th>Category</th><th>Number</th><th>Description</th></tr></thead>\
<tbody>\
<tr><td>Headware</td><td>1,2,3,4</td><td>1=none; 2=headband; 3=hat; 4=cap</td></tr>\
<tr><td>sunglasses</td><td>0,1</td><td>0=none; 1=sunglasses</td></tr>\
<tr><td>neck</td><td>1,2,3</td><td>1=none; 2=buff, 3=warm scarf</td></tr>\
<tr><td>singlet</td><td>0,1</td><td>0=None; 1=singlet</td></tr>\
<tr><td>shirt</td><td>0,1</td><td>0=None; 1=singlet</td></tr>\
<tr><td>upper_body_second_layer</td><td>1,2,3</td><td>1=None; 2=longsleeve; 3=pullover/cardigan</td></tr>\
<tr><td>upper_body_third_layer</td><td>1,2,3</td><td>1=None; 2=Fleece; 3=Insulation</td></tr>\
<tr><td>upper_body_outerlayer</td><td>1,2,3,4,5</td><td>1=none; 2=windstopper; 3=soft shell; 4= rainjacket; 5=warm coat</td></tr>\
<tr><td>hands</td><td>1,2,3</td><td>1=none; 2=light gloves; 3=warm gloves</td></tr>\
<tr><td>legs</td><td>1,2</td><td>1=shorts; 2=trousers</td></tr>\
<tr><td>raintrousers</td><td>0,1</td><td>0=none; 1=raintrousers</td></tr>\
<tr><td>socks</td><td>1,2</td><td>1=socks;2=warm wool socks</td></tr>\
<tr><td>shoes</td><td>1,2,3</td><td>1=low shoes;2=boots; 3=rainproof shoes</td></tr>\
</tbody>\
</table>"

#give out the defined input
@app.route("/api/input", methods=["GET"])
def return_iput():
    # Print the html
    
    return "<table>\
<thead><tr><th>Category</th><th>expression</th><th>Description</th></tr></thead>\
<tbody>\
<tr><td>location</td><td>cityname</td><td>'Berlin', 'münchen',...</td></tr>\
<tr><td>time/td><td>timestamp</td><td>time of the trip</td></tr>\
<tr><td>heaviness_of_trip</td><td>{heavy,easy,normal}</td><td>subjective</td></tr>\
<tr><td>heat_preference</td><td>{-5,-4,-3,..,4,5}</td><td>discrete -->integer</td></tr>\
<tr><td>sex</td><td>{f,m,d}</td><td></td></tr>\
</tbody>\
</table>"
#give out random input
@app.route("/api/random_input_example", methods=["GET"])
def random_input():
#rbm.recommendation_df(rbm.generate_multi_input(5))
    return  rbm.generate_multi_input(4).to_json(orient="index",date_format='iso')

#give out random poutput
@app.route("/api/random_output", methods=["GET"])
def random_output():
    return  rbm.recommendation_df(rbm.generate_multi_input(5))

@app.route("/api/recommendation", methods=["GET"])
def filter_outfits():
    data= json.dumps(request.get_json())
    
    return rbm.recommendation_json(data)
    #return data