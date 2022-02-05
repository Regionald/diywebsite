const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

PORT = process.env.PORT || 3501;


app.use((red,res)=>{
    res.status(404).render('home');
})

app.get('/',(req,res)=>{
    res.render('home');
    
});

app.get('/download/edu',(req,res)=>{
    
    res.download('edu.jpg')
    
})



app.listen(PORT, () => {
    console.log('App is running at port' + PORT);
  });