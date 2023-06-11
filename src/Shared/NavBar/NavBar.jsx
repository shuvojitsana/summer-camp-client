import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useClasses from "../../hooks/useClasses";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [classes] = useClasses();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navOptions = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/allClasses">All Classes</Link></li>
        <li>
            <Link to="/dashboard/mySelectedClass">

                Dashboard
                <div className="badge badge-secondary">+{classes?.length || 0}</div>

            </Link>
        </li>




        {
            user ? <>
                <span>
                    {user?.displayName}
                </span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }


    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white max-w-screen-xl" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">PHOTO MASTER</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/'>
                    <button className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:bg-white hover:text-black mr-7">Get started</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;