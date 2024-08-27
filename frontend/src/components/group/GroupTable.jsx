import useGetAllUsersGroupTable from "../../hooks/useGetAllUsersGroupTable";
import { useSelectMembersContext } from "../../context/SelectMembersContext";
// import { nanoid } from "nanoid";

const GroupTable = () => {
  // eslint-disable-next-line no-unused-vars
  const { loading, users } = useGetAllUsersGroupTable();
  const { selectMembers, setSelectMembers } = useSelectMembersContext();
  const handleCheckboxChange = (e) => {
    let exists = selectMembers.find(filter => filter === e.target.value);
    if(exists) {
      const updatedFilters = selectMembers.filter(filter => filter !== e.target.value);
      setSelectMembers(updatedFilters);
  }else {
    setSelectMembers([...selectMembers, e.target.value])
  }
  };

  return (
    <table className="table mb-16">
      {/* body */}
      <tbody>
        {users.map((user) => {
          return (
            <>
              <tr key={user._id} className="text-white">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      value={user._id}
                      onChange={handleCheckboxChange}
                      className="checkbox border-white border-opacity-70"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.profilePic}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.fullName}</div>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default GroupTable;
