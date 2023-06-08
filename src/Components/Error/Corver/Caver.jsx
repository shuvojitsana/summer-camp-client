import { FaArrowRight } from "react-icons/fa";
import "./Caver.css"

const Caver = () => {
    return (
        <div>
         

            <div className="hero min-h-[450px] caver">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl  font-mono text-[#ea4a34]">Join our school</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:bg-white hover:text-black mr-7">Read More <span><FaArrowRight></FaArrowRight></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Caver;