import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useClasses from "../../hooks/useClasses";


const AllClassCard = ({ item }) => {
    const { name, image, price, Available_seats, Instructor_name, _id } = item;
    const {user } = useContext(AuthContext);
    const [, refetch] = useClasses();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToClass = item =>{
        console.log(item);
        if(user && user.email){
            const orderItem = {classesId : _id, name, image, price, Instructor_name, Available_seats, email: user.email}
            fetch('http://localhost:5000/classes',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(orderItem) 
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class selected on this class',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to selected class!',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div>
            <div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 relative">
                        <img src={image} alt="Shoes" className="h-[240px] rounded-lg" />
                        <p className="rounded-xl px-3 py-0 w-14 h-12 flex justify-center items-center font-bold absolute left-72 top-10 text-center bg-[#ea4a34] text-white ">${price}</p>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p className="text-1xl font-serif"> {Instructor_name}</p>
                        <p> Available_seats: {Available_seats}</p>
                        <button onClick={() => handleAddToClass(item)} className="btn bg-[#ea4a34] text-white hover:text-[#ea4a34] flex gap-7 items-center justify-center">Selected class</button>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default AllClassCard;