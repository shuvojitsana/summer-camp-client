import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';



const Login = () => {
    const { register,  formState: { errors } } = useForm();

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login successfully!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from, { replace: true});
        })
        
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div >
                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1686253843~exp=1686254443~hmac=a3b540e7adc162c47558c05e0fefe7680a8d275e4d63b2cde4abf79f63f277ec" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}> 
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",  { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",  { required: true })} placeholder="password" className="input input-bordered" />
                                   
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:text-white hover:bg-black mr-7" type="submit" value="Login" />
                            </div>
                        </form>

                    </div>
                    <p className="pb-5 text-center">New here? Create a New Account: <Link to="/register" className="text-[#ea4a34]">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;