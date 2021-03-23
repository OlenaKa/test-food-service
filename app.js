const express = require('express');
const exphbs = require ('express-handlebars');
const menuItems = require ('./menu.json')
const app = express();

const PORT= process.env.PORT||4444;
app.use(express.static('publik'))

app.set('view engine', 'hbs')
app.engine('hbs', exphbs({
  extname: 'hbs',

}))


app.get('/', (req, res)=>{
  res.render('home');
  console.log('this is main page');
})

app.get('/foods', (req, res)=>{
  res.render('foods', {menuItems, cssFileName:'styles'});
  console.log('this is food page');
})

app.get('/menuItem/:menuItemId', (req, res)=>{
  // res.render('foods', {menuItems, cssFileName:'styles'});
  console.log(req.params);
  const menuItem = menuItems.find(item=>item.id === req.params.menuItemId)
  res.render('menuItem', {menuItem})
})

app.get('/about', ()=>{
  console.log('this is about page');
})

app.listen(PORT, ()=> {
  console.log('hi backend');
})