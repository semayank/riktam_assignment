import { createContext, useContext, useState } from "react";


export const SelectMembersContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectMembersContext = () => {
  return useContext(SelectMembersContext);
};

export const SelectMembersContextProvider = ({ children }) => {

  const [selectMembers, setSelectMembers] = useState([]);

  return (
    <SelectMembersContext.Provider
      value={{ selectMembers, setSelectMembers }}
    >
      {children}
    </SelectMembersContext.Provider>
  );
};
