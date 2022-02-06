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
 
## Getting Started / Installation
***Requirements:*** Node.js, version 12<br><br>
Clone the repository:
```
git clone https://github.com/TechLabs-Berlin/wt21-commfy.git
```
### Frontend:
Navigate to /client directory:
```
cd client
```
Install dependencies:
```
yarn
```
Ask one of the team members for the `.env` file and place it inside the `client` directory.
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
The App experience is optimized for **iOS / iPhone 12 Pro** (Simulation of mobile version on Chrome: Open DevTools by pressing F12 > Choose iPhone 12 Pro in the Toogle Device Toolbar).
 
### Rule-based model jupyter notebook:
* navigate to recommendation_API/rule-based_model
* open zsh/bash → pip install requirements.txt
* create an account with https://openweathermap.org and get your api key
* create python file with api = ‘your api’ and  name it as ‘congif.py’
* save in the root directory
### Flask API deployment on PythonAnywhere:
* convert notebook into a python file and name it as ‘Commfy_RBM’
* import Commfy_RBM as rbm
* create an account on pythonanywhere
* upload the ‘Commfy_RBM.py’, ‘Flask_api.py’ and ‘requirements.txt’ into the working directory
* open a bash console on pythonanywhere
* pip install requirements.txt 
* configure WSGI configuration to serve up the web application at http://<your-username>.pythonanywhere.com/
* set the variable ‘application’ to a WSGI handler - ‘Flask_api’ for this project
* add your project directory on pythonanywhere to the sys.path 
* reload the web application (http://<your-username>.pythonanywhere.com/)
### Machine learning notebook
* navigate to recommendation_API/ML_notebook
* open zsh/bash → pip install requirements.txt
* run the multiclass_classification_feet.ipynb
### Data Science toolkit:
* Python (scikit, pandas, numpy, request, datetime, pytz. matplotlib, seaborn) - programming
* CLI - mean of interaction
* Git & GitHub - version control
* Requirements.txt & virtual environment -  dependency management and isolation
* Jupyter Notebook - human-readable documents with executable codes
* VS.Code - integrated development environment
* Flask App - API
* Cloud Server: PythonAnywhere
