const { registerUser } = require('./controller/logincontroller');

registerUser('example1@example.com', 'myPassword@123', 'ExampleNickname', '+91727273727', 'ExampleAddress', 'ExampleName')
  .then(console.log)
  .catch(console.error);

