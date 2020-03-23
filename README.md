# The facility repository

This repository is a sandbox of code for the use of the learners of EvolveU  

Here's how we start it:  

Windows:  
```
git clone https://github.com/rm-evolveu/facility.git  
cd facility\facility  
npm i  
npm run build  
pipenv shell  
pipenv install  
set FLASK_APP=app.py  
set FLASK_ENV=development  
flask run  
```

Linux/MacOS (hopefully):  
```
git clone https://github.com/rm-evolveu/facility.git  
cd facility/facility  
npm i  
npm run build  
pipenv shell  
pipenv install  
export FLASK_APP=app.py  
export FLASK_ENV=development  
flask run  
```


And in another shell, do the  
npm start
