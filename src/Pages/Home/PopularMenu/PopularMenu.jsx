
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu,menuLoading] = useMenu();
    const popularMenu = menu.filter(item=>item.category === 'popular');
    // const [menu,setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // },[])


    if(menuLoading){
        return <LoadingSpiner/>
    }
    return (
        <section className="mt-20">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 p-6 md-p-4 lg:p-0">
                {
                    popularMenu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className=" flex flex-col items-center justify-center mt-8 ">
            <Link to='/menu'><button  className="border-b-4 py-2  rounded-br-lg rounded-bl-lg px-3 font-semibold border-black flex items-center">View Full Menu</button></Link>
            </div>
        </section>
    );
};

export default PopularMenu;