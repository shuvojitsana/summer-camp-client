import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight} from 'react-icons/fa';


const Banner = () => {
    return (
        <Carousel>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://img.freepik.com/free-photo/indian-photographer-man-holding-his-camera-white-background_231208-3763.jpg?w=900&t=st=1686168532~exp=1686169132~hmac=80ac426825d56346c41144b56397f58f79b1b5c7ed38795dd71f737f5e1e2339" className="w-full" />
                    <div className="absolute flex rounded-xl items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h1 className="text-5xl font-bold">Turn Photo
                                <span className="font-serif"> into</span> Masterwork</h1>
                            <p>TSed eu volutpat arcu, a tincidunt quam. Maecenas nulla quam, feugiat sit amet ipsum a, dapibus porta velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <div>
                                <button className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:bg-white hover:text-black mr-7">Read More <span><FaArrowRight/></span></button>
                                <button className="btn bg-black rounded-lg text-white border-0 hover:bg-white hover:text-black">Sign up now  <span><FaArrowRight /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/indian-photographer-man-holding-his-camera-white-background_231208-3763.jpg?w=900&t=st=1686168532~exp=1686169132~hmac=80ac426825d56346c41144b56397f58f79b1b5c7ed38795dd71f737f5e1e2339" className="w-full" />
                    <div className="absolute flex rounded-xl items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h1 className="text-5xl font-bold">Turn Photo
                                <span className="font-serif"> into</span> Masterwork</h1>
                            <p>TSed eu volutpat arcu, a tincidunt quam. Maecenas nulla quam, feugiat sit amet ipsum a, dapibus porta velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <div>
                                <button className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:bg-white hover:text-black mr-7">Read More <span><FaArrowRight/></span></button>
                                <button className="btn bg-black rounded-lg text-white border-0 hover:bg-white hover:text-black">Sign up now  <span><FaArrowRight /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/creative-woman-photographer-takes-photos-isolated-white_100800-2456.jpg?w=900" className="w-full" />
                    <div className="absolute flex rounded-xl items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h1 className="text-5xl font-bold">Turn Photo
                                <span className="font-serif"> into</span> Masterwork</h1>
                            <p>TSed eu volutpat arcu, a tincidunt quam. Maecenas nulla quam, feugiat sit amet ipsum a, dapibus porta velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <div>
                                <button className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:bg-white hover:text-black mr-7">Read More <span><FaArrowRight/></span></button>
                                <button className="btn bg-black rounded-lg text-white border-0 hover:bg-white hover:text-black">Sign up now  <span><FaArrowRight /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/creative-woman-photographer-takes-photos-isolated-white_100800-2456.jpg?w=900" className="w-full" />
                    <div className="absolute flex rounded-xl items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 w-1/2 pl-12">
                            <h1 className="text-5xl font-bold">Turn Photo
                                <span className="font-serif"> into</span> Masterwork</h1>
                            <p>TSed eu volutpat arcu, a tincidunt quam. Maecenas nulla quam, feugiat sit amet ipsum a, dapibus porta velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                            <div>
                                <button className="btn rounded-lg btn-active bg-[#ea4a34] text-white hover:bg-white hover:text-black mr-7">Read More <span><FaArrowRight/></span></button>
                                <button className="btn bg-black rounded-lg text-white border-0 hover:bg-white hover:text-black">Sign up now  <span><FaArrowRight /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;