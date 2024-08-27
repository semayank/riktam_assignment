import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateGroupContainer from "../../components/group/CreateGroupContainer";
import { useCreateGroupBtnContext } from "../../context/CreateGroupBtnContext";

const Home = () => {
	const {openGroup}=useCreateGroupBtnContext();
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
			{openGroup ? <CreateGroupContainer/>:null }
		</div>
	);
};
export default Home;
