import { createContext, useContext, useState } from "react";

export const CreateGroupBtnContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCreateGroupBtnContext = () => {
	return useContext(CreateGroupBtnContext);
};

export const CreateGroupBtnContextProvider = ({ children }) => {
	const [openGroup, setOpenGroup] = useState(false);

	return <CreateGroupBtnContext.Provider value={{ openGroup, setOpenGroup }}>{children}</CreateGroupBtnContext.Provider>;
};
