const User = require("../models/User");
const Channel = require("../models/Channel");
const Message = require("../models/Message");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

//Create User
exports.registerUser = async (req, res) => {
  const { email, name, username, password } = req.body;
  try {
    if (!email || !name || !username || !password) {
      return res.status(400).json({
        message: "All fields must be complete",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password.toString(), salt);
      const user = new User({
        email,
        name,
        username,
        password: hashedPassword,
      });
      const registeredUser = await user.save();
      if (!registeredUser) {
        return res.status(400).json({
          success: false,
        });
      }
      return res.status(200).json({
        success: true,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

//Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Auth failed, No user!",
      });
    }
    const comparedPassword = await bcrypt.compare(
      password.toString(),
      user.password
    );
    if (!comparedPassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }
    const token = await jwt.sign(user._id.toHexString(), process.env.SECRETKEY);
    user.token = token;
    const loggedInUser = await user.save();
    if (!loggedInUser) {
      return res.status(400).json({
        success: false,
      });
    }
    return res.cookie("w_auth", user.token).status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Authenticate User
exports.authUser = (req, res) => {
  return res.status(200).send({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    role: req.user.role,
    lastname: req.user.lastname,
    email: req.user.email,
    name: req.user.name,
    username: req.user.username,
  });
};

//Create Channel
exports.createChannel = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      return res.status(400).json({
        message: "All fields must be complete",
      });
    } else {
      let newChannel = await Channel.findOne({ title: req.body.title });
      if (newChannel) {
        return res.status(400).json("Channel Already Exists");
      }
      const channel = new Channel({
        title,
        description,
        members: [req.user._id],
      });
      const createdChannel = await channel.save();
      return res.status(200).json(createdChannel);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.selectChannel = async (req, res) => {
  const channelId = req.params.id;
  try {
    let eChannel = await Channel.findOne({
      _id: channelId,
      members: req.user._id,
    }).populate("members", "username");
    if (eChannel) {
      return res.status(400).json(eChannel);
    }
    let newchannel = await Channel.findOneAndUpdate(
      { _id: channelId },
      { $push: { members: req.user._id } },
      { new: true }
    ).populate("members", "username");
    return res.status(200).json(newchannel);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.createMessage = async (req, res) => {
  try {
    const message = await new Message({
      message: req.body.message,
      channelId: req.body.channelId,
      userId: req.user.id,
    });
    const createdMessage = await message.save();
    return res.status(200).json(createdMessage);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const channelId = req.params.channelId;
    const message = await Message.find({
      channelId,
    });
    console.log(message);
    return res.status(200).json(message);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
