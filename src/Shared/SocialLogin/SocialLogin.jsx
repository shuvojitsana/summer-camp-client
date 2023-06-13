import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const{googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch('https://summer-camp-school-server-six.vercel.app/users', {
                method:'POST',
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
                    navigate(from, { replace: true});
                }
            )


           
        })
    }
    return (
        <div>
            <div className="divider"></div>
             <button onClick={handleGoogleSignIn} className=" w-full mx-auto mb-6">
                        <span className="btn w-14 h-14 rounded-full hover:text-white  hover:bg-[#ea4a34] text-center"><FaGoogle></FaGoogle></span>
                        </button>
        </div>
    );
};

export default SocialLogin;