import { useEffect, useState } from "react";


const useInstructor = () => {
    const [instructors, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        fetch('Instructor.json')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
                setLoading(false)
            })
    }, [])
    return [instructors, loading]
};

export default useInstructor;