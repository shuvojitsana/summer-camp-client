import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";


const Register = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row ">
                <div >
                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1686253843~exp=1686254443~hmac=a3b540e7adc162c47558c05e0fefe7680a8d275e4d63b2cde4abf79f63f277ec" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name",  { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-700">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="photoUrl" {...register("photoURL",  { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-700">PhotoURL is required</span>}
                            </div>
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
                                <input type="password" {...register("password",  { required: true , minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'minLength' && <p className="text-red-700">password must be 6 Characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-700">password must have one upper case one logger case one number or one spicial charat</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword",  { required: true,  minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}  placeholder="confirmPassword" className="input input-bordered" />
                                    {errors.password?.type === 'minLength' && <p className="text-red-700">password must be 6 Characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-700">password must have one upper case one logger case one number or one spicial charat</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:text-white hover:bg-black mr-7" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center">Already have an account? <Link className="text-[#ea4a34]" to="/login">Login</Link></p>
                        <p className="text-center">Or sign in with</p>
                        <button className=" flex justify-center items-center">
                        <span className="btn w-14 h-14 rounded-full hover:text-white  hover:bg-[#ea4a34] text-center"><FaGoogle></FaGoogle></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;