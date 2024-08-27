import { useState } from "react";
import toast from "react-hot-toast";

const useCreateGroup = async () => {
  const [createloading, setCreateLoading] = useState(false);

  const creategroup = async ({ groupname, members }) => {
    const success = handleInputError({ groupname, members });
    if (!success) return;
    setCreateLoading(true);
    try {
      const res = await fetch("/api/groups/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.parse(JSON.stringify({ groupname, members })),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setCreateLoading(false);
    }
  };

  return { createloading, creategroup };
};

function handleInputError({ groupname, members }) {
  if (!groupname || members.length===0) {
    toast.error(
      "Please give a unique group name and select atleast one member for the group"
    );
    return false;
  }
  return true;
}

export default useCreateGroup;
