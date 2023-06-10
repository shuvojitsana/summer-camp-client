import { useEffect, useState } from "react";
import CardInstructor from "../Instractor/CardInstructor";
import Caver from "../../Components/Error/Corver/Caver";


const InstroctorCard = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('Instructor.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular_teacher')
                setMenu(popularItems);
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
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    menu.map(instructor => <CardInstructor
                        key={instructor._id}
                        instructor={instructor}
                    ></CardInstructor>)
                }
            </div>
        </div>
    );
};

export default InstroctorCard;