import { useEffect, useState } from "react";
import AllClassCard from "../Allclasses/AllClassCard";


// const PopularClass = () => {
//     const [menu, setMenu] = useState([]);

//     useEffect(() => {
//         fetch('allClasses.json')
//             .then(res => res.json())
//             .then(data => {
//                 const popularItems = data.filter(item => item.category === 'popular_teacher')
//                 setMenu(popularItems);
//             })
//     }, [])
//     return (

//         <div className=" my-10">

//             <div className="text-center">
//                 <p className="font-mono text-[#ea4a34]">Start now</p>
//                 <h2 className="text-4xl"> Course Categories</h2>
//             </div>

//             <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//                 {
//                     menu.map(item => <AllClassCard
//                         key={item._id}
//                         item={item}
//                     ></AllClassCard>)
//                 }
//             </div>
//         </div>
//     );
// };

export default PopularClass;