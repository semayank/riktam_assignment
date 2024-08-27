import { useState } from "react";
import { useAdminAuthContext } from "../context/AdminAuthContext";
import toast from "react-hot-toast";

const useAdminLogout = () => {
  const [logoutloading, setLogoutLoading] = useState(false);
  const { setAuthAdmin } = useAdminAuthContext();

  const adminlogout = async () => {
    setLogoutLoading(true);
    try {
      const res = await fetch("/api/admin/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-admin");
      setAuthAdmin(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLogoutLoading(false);
    }
  };

  return { logoutloading, adminlogout };
};
export default useAdminLogout;
