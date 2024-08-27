import { Navigate, Route, Routes } from "react-router-dom";
import SginInPage from "./pages/auth/signin/SginInPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import ProfilePage from "./pages/profile/ProfilePage";
import NotificationPage from "./pages/notification/NotificationPage";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";


function App() {
  const { data, isLoading } = useQuery({
    // we use queryKey to give a unique name to our query and refer to it later
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/auth-user");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false,
  });


  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  return (
    <div className="flex max-w-6xl mx-auto">
      {data && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={data ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/notifications"
          element={data ? <NotificationPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/profile/:username"
          element={data ? <ProfilePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!data ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!data ? <SginInPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      {data && <RightPanel />}
      <Toaster />
    </div>
  );
}

export default App;
