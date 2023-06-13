import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const image_hosting_token=import.meta.env.VITE_Image_Upload_token
const AddAClass = () => {
    const { register, handleSubmit , reset} = useForm();
    const image_hosting_url =`https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {

        const formData = new FormData();
            formData.append('image', data.image[0]);

            fetch(image_hosting_url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(imgResponse =>{
                console.log(imgResponse);
                if(imgResponse.success){
                    const imgURL = imgResponse.data.display_url;
                    const {name, price, about,Available_seats,Instructor_name, email, category} = data;
                    const newItem = {name, price: parseFloat(price), Instructor_name, email, about, Available_seats, category, image: imgURL}
                    console.log(newItem);
                    fetch('http://localhost:5000/allClasses',{
                        method:'POST',
                        headers:{
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(newItem)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        console.log('after posting a new menu item', data)
                        if(data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Items Added successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })
       
    }
    console.log(image_hosting_token);
    return (
        <div className="w-2/3">
            <h2 className="text-3xl text-center">Add A New Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4 gap-5">
                    <div className="form-control w-full }">
                        <label className="label">
                            <span className="label-text font-semibold"> Name*</span>
                        </label>
                        <input type="text" placeholder="Photography Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats*</span>
                        </label>
                        <input type="number" placeholder="Available seats" {...register("Available_seats", { required: true, maxLength: 120 })} className="input input-bordered w-full " />

                    </div>
                </div>

                <div className="flex my-4 gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" placeholder="Instructor Name" {...register("Instructor_name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="text" placeholder="Instructor Email" {...register("email", { required: true, maxLength: 120 })} className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>popular</option>
                            <option>popular_teacher</option>
                        </select>

                    </div>
                    <div className="form-control w-full ml-5">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="price" {...register("price", { required: true })} className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photography Details*</span>

                    </label>
                    <textarea {...register("about", { required: true })} className="textarea textarea-bordered h-18" placeholder="Bio"></textarea>

                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />

                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddAClass;