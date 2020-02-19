const express = require('express');
const Product = require("./database/models/Product");
const Manufactures = require("./database/models/Manufactures");
const Categories = require("./database/models/Categories");
const Properties = require("./database/models/Properties")
const router = express.Router();
router.get("/",(req, res) => {
    Product.findAll({
        include: [{model:Manufactures}]
    }).then(res1 => {
        res.json(res1);
    });
});

router.post("/",(req, res) => {
    if(req.body !==null){
    console.log(req.body);
    let newPdt = {
        Name: req.body.Name,
        Price:req.body.Price,
    };
    let newManu = req.body.manufacture
    Product.create(newPdt).then(pdt => {
        Manufactures.findOne({where: {id : newManu }}).then(resManu => {
       pdt.setManufactures(newManu)
            console.log("saved");
       });
    });
    }
    res.json({status: "executed"});
    });
    router.post("/manufacturer", (re, res) => {
        if(req.body!==null) {
            console.log(req.body);
        }
    })

    module.exports=router