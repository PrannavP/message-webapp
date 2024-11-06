const User = require("../models/UserModel");

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try{
        let user = await User.findOne({ username });
        if(user){
            return res.status(400).json({ message: "User exists already" });
        }

        user = new User({ username, password });
        await user.save();

        res.status(201).json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try{
        let user = await User.findOne({ username });
        if(!user){
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Check password
        if(user.password !== password){
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        res.status(200).json({ message: "Login successful", user });
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};