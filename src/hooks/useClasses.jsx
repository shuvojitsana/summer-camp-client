import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useClasses = () =>{
    const {user} = useContext(AuthContext);

    const {  refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () =>{
            const response =  await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            return response.json();
        },
      })

      return [classes,  refetch]
}

export default useClasses;