const db = require("../connector");
const sequelize = require("sequelize");

module.exports = db.define
(
    "Properties",
    {
        "COLOR":
        {
            type:sequelize.STRING
        },
        "WEIGHT":
        {
            type:sequelize.DOUBLE
        },
        "SIZE":
        {
            type:sequelize.STRING
        }

    }
    
)