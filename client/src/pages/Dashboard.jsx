import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col md:flex-row">
      {tab === "profile" && currentUser && <DashProfile />}
    </div>
  );
};

export default Dashboard;
