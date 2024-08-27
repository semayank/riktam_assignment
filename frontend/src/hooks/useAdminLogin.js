import { useState } from "react";
import toast from "react-hot-toast";
import { useAdminAuthContext } from "../context/AdminAuthContext";

const useAdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthAdmin } = useAdminAuthContext();

  const adminlogin = async (adminname, password) => {
    const success = handleInputErrors(adminname, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminname, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-admin", JSON.stringify(data));
      setAuthAdmin(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, adminlogin };
};
export default useAdminLogin;

function handleInputErrors(adminname, password) {
  if (!adminname || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
