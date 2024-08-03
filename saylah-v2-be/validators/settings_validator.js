const settingsSchema = {
    userId: {
      in: ['body'],
      isString: true,
      notEmpty: true,
      bail: true,
      errorMessage: 'userId is required and should be a string',
    },
    language: {
      in: ['body'],
      isString: true,
      notEmpty: true,
      bail: true,
      errorMessage: 'language is required and should be a string',

    },
    output: {
      in: ['body'],
      isString: true,
      notEmpty: true,
      bail: true,
      errorMessage: 'output is required and should be a string',
    },
    theme: {
      in: ['body'],
      isString: true,
      notEmpty: true,
      bail: true,
      errorMessage: 'theme is required and should be a string',
    },
  };
  
  module.exports = settingsSchema;