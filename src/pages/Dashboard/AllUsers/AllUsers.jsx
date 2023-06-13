import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const token = localStorage.getItem('access-token');

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-school-server-six.vercel.app/users', {
            
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json();
    });

    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-school-server-six.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
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
    };

    const handleMakeInstructor = user =>{
        fetch(`https://summer-camp-school-server-six.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-school-server-six.vercel.app/users/admin/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
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
                            <th>InstructorRole</th>
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
                                        user.role === 'admin' ? 'admin' : 
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-[#f0a49a]"><FaUserShield></FaUserShield></button>

                                    }
                                </td>
                                <td >
                                    {
                                        user.instructorRole === 'instructor' ? 'instructor' : 
                                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-sm bg-[#f0a49a]"><FaUserShield></FaUserShield></button>

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