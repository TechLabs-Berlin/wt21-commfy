# %% [markdown]
# # Ruled Based Model
# ### Hey Together,   
# Welcome to the notebook for the ruled based model of commfy
# 
#    
# ## Part 1 import libarys

# %%
import random
from random import randint
import requests, json
import pandas as pd
from datetime import datetime, timezone
import pytz
import numpy as np
import config

# %% [markdown]
# ## Part 2 gether Input
# there is the option to give input yourself, to auto generate it once or to use the function input_generator() whenever you need it.

# %%
## auto generated input:
def input_generator():
    location_list=('Berlin','Hamburg','München','Freiburg','Melbourne', 'Moskau') # example list 
    location= location_list[randint(0,5)]
    time=datetime.now(pytz.timezone('Europe/Berlin')).replace(tzinfo=None)##no timezone for better work through
    time=time.replace(hour=randint(time.hour,23))
    #weather=randint(1, 4)
    heaviness_of_trip=randint(1,3)
    if heaviness_of_trip==1: heaviness_of_trip="easy"
    if heaviness_of_trip==2: heaviness_of_trip="normal"
    if heaviness_of_trip==3: heaviness_of_trip="hard"
    heat_preference=randint(-5,5)
    sex=randint(1,3)
    if sex==1: sex="m"
    if sex==2: sex="f"
    if sex==3: sex="d"
    df=pd.DataFrame({
    "location" : [location],
    "time": [time], 
    "heaviness_of_trip": [heaviness_of_trip], 
    "heat_preference" : [heat_preference],
    "sex": [sex]
    })
    return df

# %%
#test input generator
#print(input_generator().to_json())

# %%
#autogenerate DataFrame with multiple input
def generate_multi_input(a):
    df=input_generator()
    for t in range(a-1): #a Trips today
        df=df.append(input_generator(),ignore_index = True)
    return df

# %%
#test data with json input
#a=generate_multi_input(4)
#print(a)
#a=generate_multi_input(4).to_json(orient="index",date_format='iso')
#print(a)
#json_inp= pd.read_json(a, orient='index',convert_dates=['time'])   
#print(json_inp)

# %% [markdown]
# <hr style="border:2px solid gray"> </hr>   
#    
# ## Part 3 Data Cleaning
# first we get from location and the time the weather data

# %%
def weather(df):
    # base_url variable to store url
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    future_url="https://api.openweathermap.org/data/2.5/forecast?"
    df['weather']=None
    df['temperature']=None
    #for every row in the pandas:
    for i in range(len(df.index)) :

        # Give city name
        city_name = df['location'].iloc[i]
        df_time=df['time'].iloc[i].replace(tzinfo=None)
        now=datetime.now(pytz.timezone('Europe/Berlin')).replace(tzinfo=None)
        # complete_url variable to store
        # complete url address
        complete_current_url = base_url + "appid=" + config.api_key + "&q=" + city_name + "&units=metric"
        complete_future_url= future_url + "q=" + city_name + "&appid=" + config.api_key + "&units=metric"
        # return response object
        response = requests.get(complete_current_url).json()
        response_future = requests.get(complete_future_url).json()
        time_forecast=datetime.strptime(response_future['list'][0]['dt_txt'],'%Y-%m-%d %H:%M:%S')
        time_forecast2=datetime.strptime(response_future['list'][1]['dt_txt'],'%Y-%m-%d %H:%M:%S')
        # json method of response object
        # convert json format data into
        # python format data
        if (abs((df_time-now).total_seconds()) <abs((time_forecast-df_time).total_seconds()))&(abs((df_time-now).total_seconds()) <abs((time_forecast2-df_time).total_seconds())):
            df.at[i,'weather']=response['weather'][0]['main']
            df.at[i,'temperature']=response['main']['temp']
        else:
            for a in range(10): # geht bis zu 30 Stunden in die Zukunft
                time_forecast=datetime.strptime(response_future['list'][a]['dt_txt'],'%Y-%m-%d %H:%M:%S')
                substrakt=time_forecast-df_time
                if abs(substrakt.total_seconds())<5400: ## Forecast nur alle 3 Stunden, also wird immer das nächste genommen
                    df.at[i,'weather']=response_future['list'][a]['weather'][0]['main']
                    df.at[i,'temperature']=response_future['list'][a]['main']['temp']
                    break   
    return df

# %%
#weather test
#two dataframes (one with just 1 input, and one with 6 input Trips)
#test=weather(input_generator())
#len(test.index)
#test.to_json()
#print(test)
#test2=weather(generate_multi_input(20))
#test2.head()

# %% [markdown]
# <hr style="border:2px solid gray"> </hr>   
#    
# ## Part 4 define the model
# output of this model will be the prediciton for a whole dataframe

# %%
def add_dummy(df):
    df['headwear']=1
    df['sunglasses']=0
    df['neck']=1
    df['singlet']=0
    df['shirt']=0
    df['upper_body_second_layer']=1
    df['upper_body_third_layer']=1
    df['upper_body_outerlayer']=1
    df['hands']=1
    df['legs']=1
    df['raintrousers']=0
    df['socks']=1
    df['shoes']=1
    for i in range(len(df.index)):
        df.at[i,'headwear']=randint(1,4)
        df.at[i,'sunglasses']=randint(0,1)
        df.at[i,'neck']=randint(1,3)
        df.at[i,'singlet']=randint(0,1)
        df.at[i,'shirt']=randint(0,1)
        df.at[i,'upper_body_second_layer']=randint(1,3)
        df.at[i,'upper_body_third_layer']=randint(1,3)
        df.at[i,'upper_body_outerlayer']=randint(1,5)
        df.at[i,'hands']=randint(1,3)
        df.at[i,'legs']=randint(1,2)
        df.at[i,'raintrousers']=randint(0,1)
        df.at[i,'socks']=randint(1,2)
        df.at[i,'shoes']=randint(1,3)
    return df

# %%
# todo implement the logic of the decision tree
##headwear decisiontree
def headwear(df):
    return df

# %%
## sunglasses decisiontree
def sunglasses(df):
    df['sunglasses']=0
    for i in range(len(df.index)):
        if df['weather'].iloc[i]=='Clear':
            if df['temperature'].iloc[i]>20: 
                df.at[i,'sunglasses']=1
    return df

# %%
## neck decision tree
def neck(df):
    
    df['neck']=3
    for i in range(len(df.index)):
        red=0.#reducing parameter
        if df['sex'].iloc[i]=='f':
            red=2.
        t_p_s=df['temperature'].iloc[i]+df['heat_preference'].iloc[i]-red
        if t_p_s>10:
            if (t_p_s<20) & (df['weather'].iloc[i]=='Rain'):
                df.at[i,'neck']=2
            else :
                df.at[i,'neck']=1
        else:
            if t_p_s>0:
                df.at[i,'neck']=2
            else:
                if df['weather'].iloc[i]=='Clear':
                    df.at[i,'neck']=2
    return df

# %%
##todo implement the logic of the decision tree
##singlet decisiontree
def singlet(df):
    return df

# %%
##todo implement the logic of the decision tree
##shirt decisiontree
def shirt(df):
    return df

# %%
##todo implement the logic of the decision tree
##upper_body_second_layer decisiontree
def upper_body_second_layer(df):
    return df

# %%
##todo implement the logic of the decision tree
##upper_body_third_layer decisiontree
def upper_body_third_layer(df):
    return df

# %%
##todo implement the logic of the decision tree
##upper_body_outerlayer decisiontree
def upper_body_outerlayer(df):
    return df

# %%
##todo implement the logic of the decision tree
##hands decisiontree
def hands(df):
    return df

# %%
##todo implement the logic of the decision tree
##legs decisiontree
def legs(df):
    return df

# %%
##todo implement the logic of the decision tree
##raintrousers decisiontree
def raintrousers(df):
    return df

# %%
##todo implement the logic of the decision tree
##socks decisiontree
def socks(df):
    return df

# %%
##todo implement the logic of the decision tree
##shoes decisiontree
def shoes(df):
    return df

# %%
##summing up the decision trees into 1 list
def get_clothing_output_rbm(df):
    headwear(df)
    sunglasses(df)
    neck(df)
    singlet(df)
    shirt(df)
    upper_body_second_layer(df)
    upper_body_third_layer(df)
    upper_body_outerlayer(df)
    hands(df)
    legs(df)
    raintrousers(df)
    socks(df)
    shoes(df)
    return df

# %%
#test the model
#get_clothing_output_rbm(test2)

# %% [markdown]
# <hr style="border:2px solid gray"> </hr>  
# 
# ## Part 5: output concatenating
# give out 3 DF (one for wearing now, one for the backpack and one what to wear at which trip)
# translate the string into a Json for the Flask API

# %%
# get three lists for to wear now and to bring in the backpack and a full DF what to wear at which trip
def get_clothing(df):
    dic=['headwear','sunglasses','neck','singlet','shirt','upper_body_second_layer','upper_body_third_layer','upper_body_outerlayer','hands','legs','raintrousers','socks','shoes']
    ##wear_now is the first clothing set from the first input beside when shoes and jacket are to big, they have to be wear them 
    wear_now=df.iloc[0:1].copy()
    ##in the backpack is all the other necessary clothes
    backpack_help=df.iloc[:,7:].copy()
    backpack=backpack_help.iloc[0:1].copy()
    for i in dic:
        if backpack_help[i].unique().max()==0:
            backpack.at[0,i]=None
        else:
            z=0
            while z<backpack_help[i].nunique():
                backpack.at[z,i]=backpack_help[i].unique()[z]
                z=z+1
    ##if shoes or the outerlayer are bigger in the backpack we gonna wear the biggest one, so the backpack won't get to full
    if backpack_help['shoes'].unique().max()> wear_now['shoes'][0]:
        wear_now.at[0,'shoes']=backpack_help['shoes'].unique().max()
    backpack.at[:,'shoes']=None
    if backpack_help['upper_body_outerlayer'].unique().max()> wear_now['upper_body_outerlayer'][0]:
        wear_now.at[0,'upper_body_outerlayer']=backpack_help['upper_body_outerlayer'].unique().max()
    backpack.at[:,'upper_body_outerlayer']=None  
    backpack=backpack.replace({np.nan: None})
    #Ouput of all Clothing Sets in every trip, 
    clothing_per_trip=df
    clothing_per_trip.at[:,'shoes']=wear_now['shoes'][0]
    clothing_per_trip.at[:,'upper_body_outerlayer']=wear_now['upper_body_outerlayer'][0]

    return wear_now, backpack, clothing_per_trip


# %%
#for testing with json input
#weather(json_inp)
#add_dummy(json_inp)
def recommendation_json(js):
    json_inp= pd.read_json(js, orient='index',convert_dates=['time'])  
    rec_dfs= get_clothing(add_dummy(weather(json_inp)))
    rec_js= '{"clothes":{"now":'+rec_dfs[0].to_json(orient="records")
    rec_js= rec_js+',"backpack":'+rec_dfs[1].to_json(orient="columns")
    rec_js= rec_js+',"perTrip":'+rec_dfs[2].to_json(orient="index")+'}}'
    return rec_js

def recommendation_df(df):
    rec_dfs= get_clothing(add_dummy(weather(df)))
    rec_js= '{"clothes":{"now":'+rec_dfs[0].to_json(orient="records")
    rec_js= rec_js+',"backpack":'+rec_dfs[1].to_json(orient="columns")
    rec_js= rec_js+',"perTrip":'+rec_dfs[2].to_json(orient="index")+'}}'
    return rec_js
# %%
#for testing generated input
#add_dummy(test2)

# %%
#print(get_clothing(test2))

#print(get_clothing(test2)[0].to_json(orient="records"))
#print(get_clothing(test2)[1].to_json(orient="columns"))
#print(get_clothing(test2)[2].to_json(orient="index"))

# res = clothing_per_trip.to_json(orient="records")
#  parsed = json.loads(res)
#   print(json.dumps(parsed,indent=1))

# %%
#print(get_clothing(json_inp))

# %% [markdown]
# <hr style="border:2px solid gray"> </hr>  
# 
# ## Part 6: Model Evaluation
# How do you evaluate the quality of the decisions? Assume you get true label values.
# Which evaluation metrics do you use? Which plots would be interesting?


