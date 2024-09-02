require('dotenv').config();

const express = require('express');
const cors = require('cors');
const categoriesController = require('./controller/categories_controller');
const multer = require('multer');
const upload = multer();
const { checkSchema } = require('express-validator');

const settings_controller = require('./controller/settings_controller')
const settings_validator = require('./validators/settings_validator')

const app = express();

// Enable CORS for all routes (adjust as needed)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

//
//app.use('/api/v2/categories', categoriesController);
app.get('/api/v2/categories/', categoriesController.getAllCategories);
app.get('/api/v2/categories/:categoryId/subcategories', categoriesController.getSubcategories);
app.post('/api/v2/categories/', categoriesController.createCategory);
//app.post('/api/v2/categories/', categoriesController.createCategory);
app.put('/api/v2/categories/:categoryId', categoriesController.updateCategory);
app.patch('/api/v2/categories/:categoryId', categoriesController.patchCategory);
app.post('/api/v2/categories/:categoryId/subcategories', categoriesController.createSubCategory);
app.put('/api/v2/categories/:categoryId/subcategories/:subcategoryId', categoriesController.updateSubCategory);
app.patch('/api/v2/categories/:categoryId/subcategories/:subcategoryId', categoriesController.patchSubCategory);
app.patch('/api/v2/categories/:categoryId/subcategories/:subcategoryId', categoriesController.patchSubCategory);
app.post('/', upload.single('image'), categoriesController.handleCategoryPost);
app.get('/settings', settings_controller.handleGetSettings);
app.post('/settings', checkSchema(settings_validator), settings_controller.handleSaveSettings);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



app.listen()
