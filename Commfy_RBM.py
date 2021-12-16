import random
from random import randint

## auto generated as a function to use later:
def input_generator():
    weather=randint(1, 4)
    temperature=round(random.uniform(-10,35),2)
    if weather==1: weather='sunny'
    if weather==2: weather='rainy'
    if weather==3: 
        weather='snowy'
        temperature=min(temperature,4.)
    if weather==4: weather='windy'   
    
    duration=randint(0,1)
    sex=randint(0,1)
    return weather,temperature,duration,sex
# print the input
def print_input(list):
    print('the input for...\nweather is: ',list[0],'\ntemperature is: ',list[1],'\nduration is: ',list[2],'\nsex is: ',list[3])

# so far just temperature and weather are looked at
def get_clothing_output_rbm(list):
    if list[0]=='sunny':
        if list[1]>25.0 : return 'sunny_hot'
        if list[1]>15.0 : return 'sunny_casual'
        return 'sunny_cold'
    if list[0]=='rainy':
        if list[1]>15.0 : return 'rainy_warm'
        return 'rainy_cold'
    if list[0]=='snowy': return 'snowy'
    if list[0]=='windy':
        if list[1]>15: return 'windy_warm'
        return 'windy_cold'
    return 'not defined'