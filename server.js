const express = require("express")
const app = express()

app.set("view engine", "ejs") //to use view engine


app.get('/home', (req, res) => {
  res.render('home')
});

app.get('/about-us', (req, res) => {
  res.render('about-us')
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us')
});

app.listen(4000)
