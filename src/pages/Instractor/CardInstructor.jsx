

const CardInstructor = ({ instructor }) => {
    const { picture, name, email } = instructor;
    return (
        <div>

            <div className="text-center">
                <figure className="py-2 px-5">
                    <img src={picture} alt="Shoes" className="rounded-full h-[240px] w-[240px] hover:border-8 hover:border-[#ea4a34]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-[#ea4a34]">{email}</p>
                </div>
            </div>

        </div>
    );
};

export default CardInstructor;