import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const getUsersForTable = async (req, res) => {
  try {
    const allUsers = await User.find().select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in getting user data ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    Promise.all([
      await User.deleteOne(
        { _id: userId },
        await Message.deleteMany({ senderId: userId}),
        await Message.deleteMany({ receiverId: userId}),
        await Conversation.deleteMany({participants :{ $all :[userId]}})
      ),
    ])
      .then((dbresolve) => {
        console.log(dbresolve);
        res.status(200).json({ message: "User delete successfully" });
      })
      .catch((dbreject) => {
        res
          .status(400)
          .json({ error: "Error in deleting user please check again" });
      });
  } catch (error) {
    console.error("Error in deleteing user ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
