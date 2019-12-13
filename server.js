const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Defining middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname ,"client/build")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "/assets/css/style.css")));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"/index.html"), (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('sent index file');
        };
    });
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, "/portfolio.html"), (err) => {
        if (err){
            console.log(err);
        } else {
            console.log("sent portfolio");
        };
    });
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "/contact.html"), (err) => {
        if (err){
            console.log(err);
        } else {
            console.log("sent portfolio");
        };
    });
});

app.listen(PORT, () => {
    console.log("listening on port ", PORT);
});





