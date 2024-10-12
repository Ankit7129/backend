const College = require('../models/College');

// Register a college
exports.registerCollege = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const college = new College({ name, email, password });
    await college.save();
    res.json({ message: `Welcome, ${college.name}!` });
  } catch (error) {
    res.status(400).json({ error: 'Error registering college' });
  }
};

// Login a college
exports.loginCollege = async (req, res) => {
  const { email, password } = req.body;

  try {
    const college = await College.findOne({ email, password });
    if (college) {
      res.json({ message: `Welcome back, ${college.name}!` });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error logging in college' });
  }
};
