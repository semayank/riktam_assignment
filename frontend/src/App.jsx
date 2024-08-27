import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import AdminLogin from "./pages/admin/login/AdminLogin";
import AdminHome from "./pages/admin/home/AdminHome";
import { useAdminAuthContext } from "./context/AdminAuthContext";


function App() {
  const { authUser } = useAuthContext();
  const { authAdmin } = useAdminAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/admin/login"
          element={authAdmin ? <Navigate to={"/admin"} /> : <AdminLogin />}
        />
        <Route
          path="/admin"
          element={authAdmin ? <AdminHome /> : <Navigate to={"/admin/login"} />}
        />
     
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
