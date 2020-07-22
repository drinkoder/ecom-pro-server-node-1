const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const AccountSchema = new Schema({
  // identification
  password: { type: String },
  username: { type: String },
  // ux
  avatar: { type: String },

  // authorizations
  roles: [{ type: String }],
  apps: [{ type: String }],
});

const Account = model('account', AccountSchema);

module.exports = { _Account: Account };
