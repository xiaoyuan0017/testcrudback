const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const { users } = require('../db/mongodb');


router.get('/', (req, res) => {
    res.send('success')
})

router.get('/management', (req, res) => {
    res.render('manage')
})

router.post("/sendata", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    let curdadd = new users({
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,
        date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    })
    curdadd.save(function (err, result) {
        // if(err){
        //     console.log(err);
        // }
        if (result) {
            res.json({
                status: 200
            });
        } else {
            res.json({
                status: 304
            });
        }
    })
})

router.post("/updatedata", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    // console.log(req.body.country);
    let updates = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,
    }
    users.findOneAndUpdate({ _id: updates.id }, { name: updates.name, age: updates.age, country: updates.country, }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                status: 200
            })
        }
    })
})

router.post("/deletedata", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    // console.log(req.body.country);
    users.deleteOne({ _id: req.body.id }, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json({
                status: 200
            })
        }
    });
})

router.get("/alldata", async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    await users.find({}, (err, result) => {
        
        if (result) {
            res.json({
                status: 200,
                data:result
            });
            // res.send(json(result))

        } else {
            res.json({
                status: 304
            });
        }
    })
})
 
module.exports = router 