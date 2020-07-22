const { _Account } = require('../../utils/shemas');

exports.getAllAccounts = async (req, res) => {
  res.send('Hello from all accounts (PROTECTED)');
};

exports.createAccount = async (req, res) => {
  const account = new _Account({ username: req.body.username });
  try {
    const newAccount = await account.save();
    res.status(201).json({ newAccount });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
