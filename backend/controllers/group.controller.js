import Group from "../models/group.model.js";
export const createGroup = async (req, res) => {
  try {
    console.log(req.body);
    const { groupname, members } = req.body;
    const adminId = req.user._id;

    const group = await Group.findOne({ groupname });

    if (group) {
      return res.status(400).json({ error: "Groupname already exists" });
    }

    const groupPic = `https://avatar.iran.liara.run/public/boy?username=${groupname}`;

    const newGroup = new Group({
      groupname,
      adminId,
      members,
      groupPic,
    });

    if (newGroup) {
      await newGroup.save();

      res.status(201).json({
        _id: newGroup._id,
        groupname: newGroup.groupname,
        adminId: newGroup.adminId,
        groupPic: newGroup.groupPic,
      });
    } else {
      res.status(400).json({ error: "Invalid group data" });
    }
  } catch (error) {
    console.log("Error in create group controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
