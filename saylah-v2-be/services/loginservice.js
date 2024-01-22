const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
});
