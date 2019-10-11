// const mongoose = require('mongoose');
const path = require('path')

module.exports = function (app) {
    // app.get('/contact', (req, res) => {
    //     res.render()
    // })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}