import GroupTable from "./GroupTable";
import { AiOutlineClose } from "react-icons/ai";
import { useCreateGroupBtnContext } from "../../context/CreateGroupBtnContext";
import CreateFnBtn from "./CreateFnBtn";
import { useSelectMembersContext } from "../../context/SelectMembersContext";
const CreateGroupContainer = () => {
  const { setOpenGroup } = useCreateGroupBtnContext();
  const {setSelectMembers}=useSelectMembersContext();
  const handleCloseCreateGroupModal=()=>{
    setOpenGroup(false);
    setSelectMembers([]);
  }
  return (
    <>
      <div
        className="fixed flex justify-center pt-14 md:pt-[50px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-y-auto"
      >
        <div
          className={`relative  max-w-[400px] h-[500px] mx-3 p-4 rounded-lg mb-10 w-full shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 overflow-y-auto`}
        >
          <button
            onClick={handleCloseCreateGroupModal}
            className=" absolute top-2 right-2 rounded-full"
          >
            <AiOutlineClose className="cursor pointer" color="white" size="24" />
          </button>
          <GroupTable />
          <CreateFnBtn/>
        </div>
      </div>
    </>
  );
};

export default CreateGroupContainer;
