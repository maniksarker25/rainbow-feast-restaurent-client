import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="mt-20">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 p-6 md-p-4 lg:p-0">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className=" flex flex-col items-center justify-center mt-8 ">
            <button className="border-b-4 py-2  rounded-br-lg rounded-bl-lg px-3 font-semibold border-black flex items-center">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;