import Sidebar from "./Sidebar";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;