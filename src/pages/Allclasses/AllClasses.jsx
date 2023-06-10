import Caver from "../../Components/Error/Corver/Caver";
import useAllClasses from "../../hooks/useAllClasses";
import AllClassCard from "./AllClassCard";


//  TODO implement pagination here on this page
const AllClasses = () => {
    const [classes] = useAllClasses();
    return (
        <div>
            <Caver></Caver>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            
            {
                classes.map(item => <AllClassCard
                    key={item._id}
                    item={item}
                ></AllClassCard>)
            }
        </div>
        </div>
    );
};

export default AllClasses;