const bcrypt = require('bcrypt');
const User = require("../models/users");
const env = require('../config/env')


 const getUsers = async (req, res) => {
  try{  
  const Users =  await User.find({});
    res.status(200).json(Users);
  } catch(error) {
    res.status(404).json({"message": error.message})
  }
  }

const loginUser = async (req, res) => {
  try {
    const {email, password } = req.params;

    const user = await User.findOne({email}); 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userMatch = await  bcrypt.compare(password, user.password);
    if(!userMatch) {
      return res.status(400).json({message: "invalid credantials"});
    }

    const sessionToken = jwt.sign({id:id,role:role},env.JWT_KEY,{expiresIn:'1h'});
      res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 const createUsers= async (req, res) => {
   try {
    const { name,email,admissionNumber,password,role, club} = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(env.BCRYPT_SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const user = new User({
      name,
      email,
      role,
      admissionNumber,
      password:hashedPassword,
      club,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

 const updateUsers= async (req, res) =>{
 try {const { id}  = req.params;
    const queriedUser = await User.findByIdAndUpdate(id,
      req.body,
      {new: true, runValidators:true}
    )
    if(!queriedUser)  return res.status(404).json({ message: "User not found" });
  
    res.status(500).json({ message: "Server error" });
  }catch(error) {
     res.status(500).json({ message: err.message });
  }
};
 const deleteUsers = async (req, res) =>{
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
    createUsers,
    loginUser,
    getUsers,
    deleteUsers,
    updateUsers
}