const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const WingigRegModel = require("./models/WingigReg")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/users", {

}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error', err);
});

app.post("/login/Login", (req, res) => {
    const { email, password } = req.body;
    WingigRegModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success")

                } else {
                    res.json("password is incorrect")
                }
            } else {
                res.json("no record found")
            }

        })
})


app.post("/register", (req, res) => {
    WingigRegModel.create(req.body)
        .then(regis => res.json(regis))
        .catch(err => res.json(err))
});


app.listen(3003, () => {
    console.log("server is running")
})
