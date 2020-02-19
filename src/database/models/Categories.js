const db = require("../connector");
const sequelize = require("sequelize");
module.exports = db.define
(
    "Categories",
    {
        "NAME":
        {
            type:sequelize.STRING
        },

    }
    
)