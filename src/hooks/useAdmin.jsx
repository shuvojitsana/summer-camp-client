import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxoisSecure";

const useAdmin = () =>{
   const {user} = useContext(AuthContext);
   const token = localStorage.getItem('access-token');
//    TODO 
// const [axiosSecure] = useAxiosSecure();
// const {data: isAdmin , isLoading : isAdminLoading} = useQuery({
//     queryKey:['isAdmin', user?.email],
//     queryFn: async() =>{
//         const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
//             headers: {
//                 authorization: `bearer ${token}`
//             }
//         });
//         return res.json();
//     }

// })

return [isAdmin, isAdminLoading];
  
}

export default useAdmin ;