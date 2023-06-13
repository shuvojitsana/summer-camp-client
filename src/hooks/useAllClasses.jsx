import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";


const useAllClasses = () => {
    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/allClasses')
    //     .then(res => res.json())
    //     .then(data => {
    //         setClasses(data);
    //         setLoading(false);
    //     })

    // },[]);

    const {data: classes = [], isLoading: loading , refetch} = useQuery({
        queryKey:['classes'],
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/allClasses");
            return res.json();
        }
    })




    return [classes, loading, refetch]
};

export default useAllClasses;
