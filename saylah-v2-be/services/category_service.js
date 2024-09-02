const {UserSettings} = require('../models/settings');
const {Categories} = require("../models/category");
const {SubCategories} = require("../models/category");

async function getCategories(userId) {
  try {
    const categories = await Categories.get(userId)
    console.log(categories)
    return categories
  } catch (err) {
    console.error('Error getting categories:', err);
    throw err;
  }
}

async function saveCategories(userID, language, output, theme) {
  try {
    console.log(userID, language, output, theme)
    const settings = new UserSettings({"userId": userID, "language": language, "output": output, "theme": theme})
    await settings.save()
  } catch (err) {
    console.error('Error saving user settings:', err);
    throw err;
  }
}

async function getItemsByCategoryAndUser(categoryId, userId) {
  try {
    return await SubCategories.query('categoryId').eq(categoryId).filter('userId').eq(userId).exec();
  } catch (error) {
    console.error("Error querying with Dynamoose:", error);
    throw error;
  }
}

async function saveSubCategory(subCategory) {
  try {
    const newSubCategory = new SubCategories({
      id: subCategory.id,
      userId: subCategory.userId,
      categoryId: subCategory.categoryId,
      name: subCategory.name,
      image: subCategory.image
    });

    return await newSubCategory.save();
  } catch (error) {
    console.error("Error saving subcategory:", error);
    throw error;
  }
}

async function saveSubCategoryByCategoryAndUser(categoryId, userId) {
  try {
    return await SubCategories.query('categoryId').eq(categoryId).filter('userId').eq(userId).exec();
  } catch (error) {
    console.error("Error querying with Dynamoose:", error);
    throw error;
  }
}

/*async function getSubcategories(userId, categoryId) {
  try {
    const subcategories = await getItemsByCategoryAndUser(categoryId, userId)
    console.log(subcategories.toJSON)
    return subcategories.toJSON()
  } catch (err) {
    console.error('Error getting subcategories:', err);
    throw err;
  }
}*/

module.exports = {
  getCategories,
  saveCategories,
  getItemsByCategoryAndUser,
  saveSubCategoryByCategoryAndUser,
  saveSubCategory
};
