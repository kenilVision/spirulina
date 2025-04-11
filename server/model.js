const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      sparse: true, 
    },
    isGuest: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
      minlength: 6,
    }
    }
);

module.exports = mongoose.model("User", userSchema);
