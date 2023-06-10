

const AllClassCard = ({ item }) => {
    const { name, image, price, Available_seats, Instructor_name } = item;


    const handleAddToClass = item =>{
        console.log(item);
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