# Commfy
_Commfy_ is a digital product that fundamentally changes how bike commuters make their cycling clothing decisions. Through data-driven recommendations, the application ensures that users wear the right clothes every time they ride their bikes, even in changing weather conditions. Automated and enhanced apparel selection takes the personal commuter experience to a new level, allowing users to focus on what matters most to them truly. Hence, _Commfy_ transforms bike commuting, making it more convenient, easier, and safer.
<br><br>The project was realized in TechLabs` Winter Term 2021/2022.<br><br>
## Members
### Team Members
* [Kevin Cummings](https://github.com/kahdehzeh)
* [Matthias Funk](https://github.com/matzefunk)
* [Florian Grünbaum](https://github.com/Flogreeni)
* [Tolgonai Kozhoeva](https://github.com/TolgoAI)
* [Sonja Peschke](https://github.com/code-kedi)
* [Stefanie Zastrow](https://github.com/SteffiZ-0-0)
### Mentors
* [Matheus Albuquerque](https://github.com/ythecombinator)
* [Maximilian Hildebrandt](https://github.com/maximilian-hildebrandt)<br><br>

![product picture](./README_picture.png)
<br><br>Are you interested in our UX-Team´s work? You can find all the _UX content_ in the _Docs folder_.
 
Getting Started / Installation
Requirements: Node.js, version 12
 
Clone the repository:
git clone https://github.com/TechLabs-Berlin/wt21-commfy.git
 
### Frontend:
Navigate to /client directory:
```
cd client
```
Install dependencies:
```
yarn
```
Run the app:
```
yarn start
```
### Backend:
Note upfront: in order to run the backend locally, a key is needed (admin-access only)
 
Install Firebase
```
npm install -g firebase-tools
firebase login
```
Navigate to /functions directory:
```
cd functions
```
Install Firebase Admin
```
npm install firebase-admin
```
Run Firebase
```
firebase serve
```
The App is optimized for iOS / iPhone 12 Pro (Simulation of mobile version on Chrome: Open DevTools by pressing F12 > Choose iPhone 12 Pro in the Toogle Device Toolbar).
 
### Prerequisites for running Jupyter Notebooks
Zsh/Bash → install packages & versions with pip install requirements.txt
(have the requirements.txt in your working directory) 
Create an account with https://openweathermap.org and get your api key
Create a config.py in the working directory with api_key = ' your_api_key'


### Flask API Deployment on PythonAnywhere
Create an account on pythonanywhere
Create a directory with flask_api.py
Open a bash console on pythonanywhere
    pip install requirements.txt 

