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
// app.use(express.static(path.join(_dirname, "client/build")))  (might need this later.)

app.get('/', (req,res) => {
    res.sendFile("/index.html", (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('sent index file');
        };
    });
});

app.listen(PORT, () => {
    console.log("listening on port ", PORT);
});





