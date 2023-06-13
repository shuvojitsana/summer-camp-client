import Swal from "sweetalert2";
import useAllClasses from "../../../hooks/useAllClasses";
import { FaTrashAlt } from "react-icons/fa";


const ManageItem = () => {
    const [classes, , refetch] = useAllClasses();

    const handleDelete = item => {
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


                fetch(`https://summer-camp-school-server-six.vercel.app/allClasses/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('delete res', data)
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
        <div>
            <h2 className="uppercase my-4 text-center text-3xl">MAnage Item</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item</th>
                            <th>Instructor name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}

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
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td className="font-serif">
                                    {item.Instructor_name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-[#f0a49a] "><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)

                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItem;