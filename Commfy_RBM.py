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
    heaviness_of_trip=randint(1,3)
    if heaviness_of_trip==1: heaviness_of_trip="easy"
    if heaviness_of_trip==2: heaviness_of_trip="normal"
    if heaviness_of_trip==3: heaviness_of_trip="hard"
    heat_preference=randint(-5,5)
    sex=randint(1,3)
    if sex==1: sex="m"
    if sex==2: sex="f"
    if sex==3: sex="d"
    return list((weather,temperature,heaviness_of_trip,heat_preference,sex))
# print the input    
def print_input(list):
    print('the input for...\nweather is: ',list[0],'\ntemperature is: ',list[1],'\nheaviness of the trip is: ',list[2],'\nHeat_preference is: ',list[3],'\nsex is: ',list[4])

## sunglasses decisiontree
def sunglasses(list):
    if list[0]=='sunny':
        if list[1]>20: return 1
    return 0
## neck decision tree
def neck(list):
    red=0.
    if list[4]=='f':
        red=2.
    if (list[1]+list[3]-red)>10:
        if ((list[1]+list[3]-red)<20) & (list[0]=='rainy'):
            return 2
        return 1
    if (list[1]+list[3]-red)>0:
        return 2
    if list[0]=='sunny':
        return 2
    return 3
##summing up the decision trees into 1 list
def get_clothing_output_rbm(list):
    a={}
    a["sunglasses"]=sunglasses(list)
    a["neck"]=neck(list)
    return a

#autogenerate list of multiple input lists
def generate_multilist(a):
    multilist=[]
    for i in range(a): #a Trips today
        multilist.append(input_generator())
    return multilist

# get two lists for to wear now and to bring in the backpack
def get_clothing_multilist(multilist):
    ##wear_now is the first clothing set from the first input     
    # todo to reevaluate the list, if the big stuff like shoes or jackets just the warmest are choosen
    wear_now=get_clothing_output_rbm(multilist[0])

    backpack={}
    for key in get_clothing_output_rbm(multilist[0]).keys():
        for i in range(len(multilist)):
            if (get_clothing_output_rbm(multilist[i])[key]!=wear_now[key])&(key not in backpack.keys())&(get_clothing_output_rbm(multilist[i])[key]!=0):
                backpack[key]= get_clothing_output_rbm(multilist[i])[key]
            ##it should be just one piece per categorie in the backpack (if questioned, then the warmest(highest number))
            if (get_clothing_output_rbm(multilist[i])[key]!=wear_now[key])&(key in backpack.keys()):
                if get_clothing_output_rbm(multilist[i])[key]>backpack[key]:
                    backpack[key]=get_clothing_output_rbm(multilist[i])[key]
    return wear_now, backpack        