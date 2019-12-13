const express = require('express');
const app = express();
const path = require("path");
const navBarController = require('./controller/navBarController.js');
const PORT = process.env.PORT || 3001;

// Defining middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname ,"client/build")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "/assets/css/style.css")));

app.get('/', navBarController.loadHomePage);

app.get('/portfolio', navBarController.loadPortfolioPage);

app.get('/contact', navBarController.loadContactPage);

app.listen(PORT, () => {
    console.log("listening on port ", PORT);
});





