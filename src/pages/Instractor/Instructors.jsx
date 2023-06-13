
import CardInstructor from "./CardInstructor";
// import useInstructor from "../../hooks/useInstructor";
import Caver from "../../Components/Error/Corver/Caver";
import { useEffect, useState } from "react";



const Instructors = () => {

    // const [instructors] = useInstructor();
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-six.vercel.app/instractors')
            .then(res => res.json())
            .then(data => {
                
                setInstructors(data);
            })
    }, [])
    
    return (
        <div>
            <Caver></Caver>
            <div className="text-center mt-8">
                
                <h3 className="text-3xl text-rose-600 font-mono">
                    Our team</h3>
                <h1 className="text-5xl font-bold">Meet Our Teachers</h1>
                <span className="underline text-rose-600"></span>

                <p className="my-3">Duis dictum massa nunc, at tristique elit consequat et. Mauris sed magna at urna tempor ultrices. <br></br> Pellentesque sit amet odio a leo  facilisis ultricies. Pellentesque <br></br> mollis efficitur quam eu laoreet.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
                {
                    instructors.map(instructor => <CardInstructor
                        key={instructor._id}
                        instructor={instructor}
                    ></CardInstructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;