import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import CreateGroupButton from "./CreateGroupButton";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	return (
		<div className=' relative border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton/>
			<CreateGroupButton/>
		</div>
	);
};
export default Sidebar;

