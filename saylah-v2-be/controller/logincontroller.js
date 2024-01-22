app.post('saylahv2/signup', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);

    const user = await userSchema.create(req.body);

    const token = jwt.sign({ userId: user._id }, process.env.SECRET);
    res.send({ token });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('saylahv2/login', async (req, res) => {
  try {
    const user = await User.findByEmail(req.body.email);

    const valid = await bcrypt.compare(req.body.password, user.password);
    if(!valid) throw new Error('Invalid password');

    const token = jwt.sign({ userId: user._id }, process.env.SECRET);
    res.send({ token });
  } catch (err) {
    res.status(400).send(err);
  }
});
