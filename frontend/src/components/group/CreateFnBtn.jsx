import {useState } from "react";
import { useSelectMembersContext } from "../../context/SelectMembersContext";
import useCreateGroup from "../../hooks/useCreateGroup";
import { useEffect } from "react";
import { useCreateGroupBtnContext } from "../../context/CreateGroupBtnContext";

const CreateFnBtn = () => {
  const {setOpenGroup}=useCreateGroupBtnContext();
  const { selectMembers } = useSelectMembersContext();
  const { createloading, creategroup } = useCreateGroup();
  const [inputs, setInputs] = useState({
    groupname: "",
    members: selectMembers,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("From Function",inputs);
    await creategroup(inputs);
    setOpenGroup(false);
  };
  console.log(inputs);
  useEffect(()=>{
   setInputs({...inputs,members:selectMembers});
  },[selectMembers]);


  return (
    <div className="flex flex-row items-center justify-between space-x-1">
      <form onSubmit={handleSubmit}>
        <label className="label-text text-white">Group Name:</label>
        <input
          value={inputs.groupname}
          onChange={(e) => setInputs({ ...inputs, groupname: e.target.value })}
          className=" text-white"
        />
        <button type="submit" className={`btn btn-primary text-white`}>
          {createloading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Create"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateFnBtn;
