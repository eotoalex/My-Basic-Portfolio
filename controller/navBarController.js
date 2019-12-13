const path = require('path');

module.exports = {
    loadHomePage:(req,res) => {
        res.sendFile(path.join(__dirname,"../assets/html/index.html"), (err) => {
            if(err){
                console.log(err);
            } else {
                console.log('Successfully sent index page');
            };
        });
    },
    loadPortfolioPage:(req, res) => {
        res.sendFile(path.join(__dirname, "../assets/html/portfolio.html"), (err) => {
            if (err){
                console.log(err);
            } else {
                console.log("Successfully sent portfolio page");
            };
        });
    },
    loadContactPage:(req, res) => {
        res.sendFile(path.join(__dirname, "../assets/html/contact.html"), (err) => {
            if (err){
                console.log(err);
            } else {
                console.log("Successfully sent contact page.");
            };
        });
    }
};