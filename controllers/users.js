const User = require("../model/userSchema");
require("dotenv").config();

exports.createUser = async (request, response) => {
  try {
    const { petName, phoneNumber } = request.body;

    const newUser = await new User({
      petName,
      phoneNumber,
    });

    const data = await newUser.save();
    console.log(data)
    return response.status(200).json({ message: data });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
