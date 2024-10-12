const Student = require('../models/Student');

// Register a student
exports.registerStudent = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const student = new Student({ name, email, password });
    await student.save();
    res.json({ message: `Welcome, ${student.name}!` });
  } catch (error) {
    res.status(400).json({ error: 'Error registering student' });
  }
};

// Login a student
exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email, password });
    if (student) {
      res.json({ message: `Welcome back, ${student.name}!` });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error logging in student' });
  }
};
