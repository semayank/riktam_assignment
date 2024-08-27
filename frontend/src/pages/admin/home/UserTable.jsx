import { Link } from "react-router-dom";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import useUserDelete from "../../../hooks/useUserDelete";
import useAdminLogout from "../../../hooks/useAdminLogout";

const UserTable = () => {
  // eslint-disable-next-line no-unused-vars
  const {loading,users}=useGetAllUsers();
  const {delteloading , deleteuser}=useUserDelete();
  const {logoutloading,adminlogout}=useAdminLogout();
 
  

return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-[500px] overflow-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>
                <label>
            <input type="checkbox" className="checkbox border-gray-50 border-opacity-50" />
          </label>
              </th>
              <th>Full Name</th>
              <th>User Name</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
           users.map((user)=>{
              return <><tr className="text-white">
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-white border-opacity-70" />
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
              <td>
                {user.username}
               
              </td>
              <td>{user.gender}</td>
              <th>
                <button onClick={()=>deleteuser(user._id)} className="btn hover:bg-[#C76E74]  bg-[#C43B56] border-none text-white">
                {delteloading ? <span className='loading loading-spinner '></span> : "Delete"}
                </button>
              </th>
            </tr></>            
           }) 
            }
          </tbody>
          {/* foot */}
          <tfoot className="flex flex-row items-center justify-start mt-2 gap-x-1">
            <button className="btn btn-primary text-white">
              <Link to={"/admin/newuser"}>Add User</Link>
            </button>
            <button onClick={()=>adminlogout()} className="btn btn-primary text-white text-[16px]">
            {logoutloading ? <span className="loading loading-spinner"></span> :  "Logout"}
            </button>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
