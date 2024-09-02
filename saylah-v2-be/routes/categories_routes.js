const {FileUploadService} = require("../services/file-upload/file-upload.service");
const {DynamoDBService} = require("../services/dynamodb/dynamodb.service");

// Mock data for categories and subcategories
const categories = [
  {id: 1, name: 'Food', image: 'food.jpg'},
  {id: 2, name: 'Places', image: 'places.jpg'},
  {id: 3, name: 'Activities', image: 'activities.jpg'}
];

const subcategories = [
  {id: 1, categoryId: 1, name: 'Fruits', image: 'fruits.jpg'},
  {id: 2, categoryId: 1, name: 'Vegetables', image: 'vegetables.jpg'},
  {id: 3, categoryId: 2, name: 'Parks', image: 'parks.jpg'},
  {id: 4, categoryId: 2, name: 'Museums', image: 'museums.jpg'},
  {id: 5, categoryId: 3, name: 'Sports', image: 'sports.jpg'},
  {id: 6, categoryId: 3, name: 'Games', image: 'games.jpg'}
];

// Interface for categories and subcategories
const categoryInterface = {
  id: 0,
  name: '',
  image: ''
};

const subcategoryInterface = {
  id: 0,
  categoryId: 0,
  name: '',
  image: ''
};

// GET /api/categories
async function getCategories(req, res) {
  res.json(categories);
}

// GET /api/categories/:categoryId/subcategories
/*async function getSubcategories(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const categorySubcategories = subcategories.filter(subcategory => subcategory.categoryId === categoryId);
  res.json(categorySubcategories);
}*/

// POST /api/categories
/*async function createCategory(req, res) {
  const newCategory = {...categoryInterface, ...req.body};
  newCategory.id = categories.length + 1;
  categories.push(newCategory);
  res.status(201).json(newCategory);
}*/

/*async function createCategoryImagePost(req, res) {
//router.post('/', upload.single('image'), async (req, res) => {
  const fileUploadService = new FileUploadService();
  const dynamoDBService = new DynamoDBService();

  try {

    const imageUrl = await fileUploadService.uploadFile(req.file);
    const newCategory = {...categoryInterface, ...req.body, image: imageUrl};
    newCategory.id = categories.length + 1;
    categories.push(newCategory);

    const dynamoDBItem = {
      id: {N: newCategory.id.toString()},
      name: {S: newCategory.name},
      image: {S: newCategory.image}
    };

    await dynamoDBService.saveItem(dynamoDBItem);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).json({error: 'Internal server error'});
  }
}*/

// PUT /api/categories/:categoryId
/*async function updateCategory(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const categoryIndex = categories.findIndex(category => category.id === categoryId);
  if (categoryIndex !== -1) {
    const updatedCategory = {...categoryInterface, ...req.body, id: categoryId};
    categories[categoryIndex] = updatedCategory;
    res.json(updatedCategory);
  } else {
    res.status(404).json({error: 'Category not found'});
  }
}*/

// PATCH /api/categories/:categoryId
/*async function patchCategory(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const categoryIndex = categories.findIndex(category => category.id === categoryId);
  if (categoryIndex !== -1) {
    const updatedCategory = {...categories[categoryIndex], ...req.body};
    categories[categoryIndex] = updatedCategory;
    res.json(updatedCategory);
  } else {
    res.status(404).json({error: 'Category not found'});
  }
}*/

// POST /api/categories/:categoryId/subcategories
/*async function createSubCategory(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const newSubcategory = {...subcategoryInterface, ...req.body, categoryId};
  newSubcategory.id = subcategories.length + 1;
  subcategories.push(newSubcategory);
  res.status(201).json(newSubcategory);
}*/

// PUT /api/categories/:categoryId/subcategories/:subcategoryId
/*async function updateSubCategory(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const subcategoryId = parseInt(req.params.subcategoryId);
  const subcategoryIndex = subcategories.findIndex(subcategory => subcategory.id === subcategoryId && subcategory.categoryId === categoryId);
  if (subcategoryIndex !== -1) {
    const updatedSubcategory = {...subcategoryInterface, ...req.body, id: subcategoryId, categoryId};
    subcategories[subcategoryIndex] = updatedSubcategory;
    res.json(updatedSubcategory);
  } else {
    res.status(404).json({error: 'Subcategory not found'});
  }
}*/

// PATCH /api/categories/:categoryId/subcategories/:subcategoryId
/*async function patchSubCategory(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const subcategoryId = parseInt(req.params.subcategoryId);
  const subcategoryIndex = subcategories.findIndex(subcategory => subcategory.id === subcategoryId && subcategory.categoryId === categoryId);
  if (subcategoryIndex !== -1) {
    const updatedSubcategory = {...subcategories[subcategoryIndex], ...req.body};
    subcategories[subcategoryIndex] = updatedSubcategory;
    res.json(updatedSubcategory);
  } else {
    res.status(404).json({error: 'Subcategory not found'});
  }
}*/

module.exports = {
  getCategories,
/*  getSubcategories,
  createCategory,
  updateCategory,
  patchCategory,
  createSubCategory,
  updateSubCategory,
  patchSubCategory,
  handleCategoryPost: createCategoryImagePost*/
};
