import { FaHome, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#f0a49a]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to="/dashboard/paymentsHistory"><FaWallet></FaWallet> Payments History</NavLink></li>
            <li><NavLink to="/dashboard/mySelectedClass">My Selected Class</NavLink></li>
            <li><NavLink to="/dashboard/myEnrolledClasses">My Enrolled Classes</NavLink></li>

            <div className="divider"></div>
            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
            <li><NavLink to="/allClasses">All Class</NavLink></li>
            <li><NavLink to="/instructors"> Instructor</NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;