const db = require("../connector");
const sequelize = require("sequelize");

module.exports = db.define
(
    "Manufactures",
    {
        "NAME":
        {
            type:sequelize.STRING
        },

        "LOCATION":
        {
            type:sequelize.STRING
        }

    }
    
)