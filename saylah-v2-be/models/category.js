const dynamoose = require("dynamoose");

const categoriesSchema = new dynamoose.Schema({
  id: Number,
  name: String,
  image: String,
  userId: String
}, {
    "saveUnknown": true,
    "timestamps": true
});

const Categories = dynamoose.model("categories", categoriesSchema)

const subCategoriesSchema = new dynamoose.Schema({
  id: Number,
  userId: String,
  categoryId: String,
  name: String,
  image: String
}, {
    "saveUnknown": true,
    "timestamps": true
});

const SubCategories = dynamoose.model("sub-categories", subCategoriesSchema)

module.exports = {
  Categories: Categories,
  SubCategories: SubCategories
};
