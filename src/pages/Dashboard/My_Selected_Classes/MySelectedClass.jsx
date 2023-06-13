import { FaTrashAlt } from "react-icons/fa";
import useClasses from "../../../hooks/useClasses";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MySelectedClass = () => {
    const [classes, refetch] = useClasses();
    console.log(classes);
    // how too reduces work
    const total = classes.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item =>{
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
              fetch(`https://summer-camp-school-server-six.vercel.app/classes/${item._id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
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
                <h2>Total Selected Class: {classes.length}</h2>
                <h2>Total Price: ${total}</h2>
               <Link to="/dashboard/payment"> <button className="btn btn-sm bg-[#f0a49a]">Pay</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th>Instructor  Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            classes.map((item, index) => <tr 
                                key={item._id}
                               
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                   {item.name}
                                </td>
                                <td className="font-serif">
                                   {item.Instructor_name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <th>
                                    <button onClick={() =>handleDelete(item)} className="btn btn-ghost btn-sm bg-[#f0a49a]"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                        


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;