const express = require("express");
const morgan = require('morgan');

const app = express();

app.set('view engine' , 'ejs');

app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'));

 app.get('/', (req , res)=>{
   res.render('index', {title : 'Home'});
});
app.get('/about', (req , res)=>{
   res.render('about', {title : 'About'});
});

// 404 page
app.use((req , res)=>{
    res.status(404).render('404', {title : '404'});
})

