const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  avatarUrl: String,
  profileImage: String,
  lastName: { type: String, require: true },
  isActive: { type: Boolean, default: true },
  firstName: { type: String, require: true },
  isAdmin: { type: Boolean, default: false },
  isCreator: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, require: true, unique: true },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);
