import { createContext, useContext, useState } from "react";

export const AdminAuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminAuthContext = () => {
	return useContext(AdminAuthContext);
};

export const AdminAuthContextProvider = ({ children }) => {
	const [authAdmin, setAuthAdmin] = useState(JSON.parse(localStorage.getItem("chat-admin")) || null);

	return <AdminAuthContext.Provider value={{ authAdmin, setAuthAdmin }}>{children}</AdminAuthContext.Provider>;
};
