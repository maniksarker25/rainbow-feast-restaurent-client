import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from '../../../assets/menu/banner3.jpg'
import desertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    // const popularMenu = menu.filter(item=> item.category === 'popular');
    const dessertMenu = menu.filter(item=> item.category === 'dessert');
    const saladMenu = menu.filter(item=> item.category === 'salad');
    const offeredMenu = menu.filter(item=> item.category === 'offered');
    // const drinksMenu = menu.filter(item=> item.category === 'drinks');
    const soupMenu = menu.filter(item=> item.category === 'soup');
    const pizzaMenu = menu.filter(item=> item.category === 'pizza');
  return (
    <div>
      <Helmet>
        <title>RainbowFeast-Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover coverImg={menuBg} title={'Our Menu'} paragraph={'WOULD YOU LIKE TO TRY A DISH?'}></Cover>
      <SectionTitle subHeading={"Don't Miss"} heading={"TODAY'S OFFER"}></SectionTitle>
      {/* offered menu items */}
      <MenuCategory title={'offered'} items={offeredMenu}></MenuCategory>
      {/* desert menu items */}
      <MenuCategory coverImg={desertBg} items={dessertMenu} title={'desert'} paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley '} ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory coverImg={pizzaBg} items={pizzaMenu} title={'pizza'} paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '} ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory coverImg={saladBg} items={saladMenu} title={'salad'} paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '} ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory coverImg={soupBg} items={soupMenu} title={'soup'} paragraph={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '} ></MenuCategory>
    </div>
  );
};

export default Menu;
