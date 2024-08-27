import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useCreateGroupBtnContext } from "../../context/CreateGroupBtnContext";
import { useAuthContext } from "../../context/AuthContext";
import { useSelectMembersContext } from "../../context/SelectMembersContext";


const CreateGroupButton = () => {
  const {setOpenGroup}=useCreateGroupBtnContext();
  const {authUser}= useAuthContext();
  const {selectMembers,setSelectMembers}=useSelectMembersContext();
  const handleCreateGroupModal=()=>{
    setSelectMembers([...selectMembers,authUser._id]);  
    setOpenGroup(true);
  }
  return (
    <div className=" absolute right-4 bottom-4">
      <AiOutlineUsergroupAdd onClick={handleCreateGroupModal} color="white" className="cursor-pointer" size={24}/>
    </div>
  )
}

export default CreateGroupButton
