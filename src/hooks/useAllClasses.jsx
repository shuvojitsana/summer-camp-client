import { useEffect, useState } from "react";


const useAllClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch('allClasses.json')
        .then(res => res.json())
        .then(data => {
            setClasses(data);
            setLoading(false);
        })
    },[])
    return [classes, loading]
};

export default useAllClasses;
