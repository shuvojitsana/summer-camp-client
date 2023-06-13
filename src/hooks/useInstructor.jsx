import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
 //    TODO 
 // const [axiosSecure] = useAxiosSecure();
 const {data: isInstructor , isLoading : isInstructorLoading} = useQuery({
     queryKey:['isInstructor', user?.email],
     queryFn: async() =>{
         const res = await fetch(`https://summer-camp-school-server-six.vercel.app/instractors/${user?.email}`, {
             headers: {
                 authorization: `bearer ${token}`
             }
         });
         return res.json();
     }
 
 })
 
 return [isInstructor, isInstructorLoading];
};

export default useInstructor;