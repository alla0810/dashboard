import User from "../models/User.js";

export const getAllUser = async (req, res) => {
    // console.log("req", req);

    try {
        const user = await User.find();        
        // console.log("user", user);

        res.status(200).json(user);
    } catch (error) {
        res.status (404).json({message: error.message})
    }
};

export const getUser = async (req, res) => {
    // console.log("req", req);

    try {
        const {id} = req.params;
        const user = await User.findById(id);
        console.log("id", id);
        // console.log("user", user);

        res.status(200).json(user);
    } catch (error) {
        res.status (404).json({message: error.message})
    }
}