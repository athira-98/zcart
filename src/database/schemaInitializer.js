const Product = require("./models/Product")
const Properties = require("./models/Properties")
const Categories = require("./models/Categories")
const Manufactures = require("./models/Manufactures")


const db = require("./connector")

Product.hasOne(Properties)
Product.belongsTo(Categories)

Product.belongsToMany(Manufactures, {
    through:"Product_Manufacture",
    foreignKey:"PRODUCT_ID",
    otherKey:"MANUFACTURE_ID",
    timestamp:false
})

Manufactures.belongsToMany(Product, {
    through:"Product_Manufacture",
    foreignKey:"MANUFACTURE_ID",
    otherKey:"PRODUCT_ID",
    timestamp:false
})

db.sync()