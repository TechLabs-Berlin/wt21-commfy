import os
import json
from flask import Flask, jsonify, request, Response
import Commfy_RBM as rbm
#import pandas as pd

app = Flask(__name__)
app.config["DEBUG"] = True

outfits = {"sunglasses":(0,1),"neck":(1,2,3)}

module_dir = os.path.abspath(os.path.dirname(__file__))


@app.route("/")
def hello_world():
    return "<p>Hello, from Commfy!</p>\
    <p> go to http://127.0.0.1:5000/api/outfits/all to see all the otufits </p>\
    <p> go to http://127.0.0.1:5000/api/random_input to see a random input </p>\
    <p> go to http://127.0.0.1:5000/api/random_in_output to see a random in and output </p>\
    <p> go to http://127.0.0.1:5000/api/random_output to see a random output </p> "

#give out the defined outfits
@app.route("/api/outfits/all", methods=["GET"])
def return_all():
    return outfits
#give out random input
@app.route("/api/random_input", methods=["GET"])
def random_input():
    return jsonify(rbm.generate_multilist(6))
#give out random in and the right output
@app.route("/api/random_in_output", methods=["GET"])
def random_in_output():
    a= rbm.generate_multilist(6)
    b= rbm.get_clothing_multilist(a)
    js=[a,b]
    return  jsonify(js)
#give out random poutput
@app.route("/api/random_output", methods=["GET"])
def random_output():
    a= rbm.generate_multilist(6)
    b= rbm.get_clothing_multilist(a)
    return  jsonify(b)

@app.route("/api/outfits/filter", methods=["GET"])
def filter_outfits():
    data= request.get_json()
    return jsonify(rbm.get_clothing_multilist(data))