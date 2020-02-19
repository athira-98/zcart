const db = require("../connector");
const sequelize = require("sequelize");

module.exports = db.define
(
    "Product",
    {
        "NAME":
        {
            type:sequelize.STRING
        },
        "PRICE":
        {
            type:sequelize.DOUBLE
        },
        "MANUFACTURE":
        {
            type:sequelize.DOUBLE
        }

    }

)


