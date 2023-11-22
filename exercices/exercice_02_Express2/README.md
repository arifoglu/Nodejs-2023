//you should run these files repectively and separately
NOTE:You have to install these node modules 
***  npm install express ****
***  npm install morgan ****
***  npm install ejs ****

* you should add these
app.set('view engine' , 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));

1-app.js file => just display differents files from local directories (index,about etc...)



