import { FaHome, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useClasses from "../hooks/useClasses";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
  const [classes] = useClasses();

  // TODO load data from the server to have dynamic isAdmin or isInstructor based on the data 
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const [isInstructor] = useInstructor();
  console.log(isInstructor);

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

          {
            isAdmin?.admin ? <>

              <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
              <li>
                <NavLink to="/dashboard/manageItem">Manage Classes

                </NavLink>
                <NavLink to="/dashboard/addAClass">Add A Class

                </NavLink>
              </li>
              <li><NavLink to="/dashboard/allUsers">All Users</NavLink></li>
            </> :

              // isInstructor ? <>
              //   <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Instructor Home</NavLink></li>
              //   <li>
              //     <NavLink to="/dashboard/manageItem">Manage Classes

              //     </NavLink>
              //     <NavLink to="/dashboard/addAClass">Add A Class

              //     </NavLink>
              //   </li>
              // </>
              //   :
                <>
                  <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                  <li><NavLink to="/dashboard/paymentsHistory"><FaWallet></FaWallet> Payments History</NavLink></li>
                  <li>
                    <NavLink to="/dashboard/mySelectedClass">My Selected Class
                      <span className="badge badge-secondary">+{classes?.length || 0}</span>
                    </NavLink>
                  </li>
                  <li><NavLink to="/dashboard/myEnrolledClasses">My Enrolled Classes</NavLink></li>
                </>
          }


          {/* {
            
            :
            <>
                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                <li><NavLink to="/dashboard/paymentsHistory"><FaWallet></FaWallet> Payments History</NavLink></li>
                <li>
                  <NavLink to="/dashboard/mySelectedClass">My Selected Class
                    <span className="badge badge-secondary">+{classes?.length || 0}</span>
                  </NavLink>
                </li>
                <li><NavLink to="/dashboard/myEnrolledClasses">My Enrolled Classes</NavLink></li>
              </>
          } */}


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