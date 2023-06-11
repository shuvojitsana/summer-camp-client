import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    const handleDelete = user =>{

    }


    
    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-serif">My Photography Class</h2>
                <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Repellendus tempore placeat quas inventore accusamus beatae!</p>
            </div>
            <div className="uppercase font-bold h-[60px]  flex justify-around items-center">
                <h2 className="text-4xl">Total user: {users.length}</h2>
              
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}

                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                   {user.name}
                                </td>
                                <td>
                                {user.email}
                                </td>
                                <td >
                                 {
                                    user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-[#f0a49a]"><FaUserShield></FaUserShield></button> 

                                 }
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-[#f0a49a]"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;