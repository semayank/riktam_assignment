import { useState } from "react";
import toast from "react-hot-toast";
import {useAdminAuthContext} from "../context/AdminAuthContext";

const useUserDelete=()=>{
    const [loading,setLoading]=useState(false);
    const {authAdmin}=useAdminAuthContext();
    const deleteuser=async(userId)=>{
        if(!authAdmin) 
            {
                toast.error("No admin has logged In first do an admin login")
                return;
            }
        const success=handleInputError(userId);
        if(!success) return;
        setLoading(true);
        try{
            const res = await fetch(`/api/admin/delete/user/${userId}`, {
				method: "DELETE",
			});
            const data=await res.json();
            console.log(data);
            if(data.error) throw new Error(data.error);

        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoading(true);
        }
    }

    return {loading,deleteuser};
}

export default useUserDelete;
function handleInputError(userId){
    if(!userId){
        toast.error("Please check you have deleted a proper user");
        return false;
    }
    return true;
}