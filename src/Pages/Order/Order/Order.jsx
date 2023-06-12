import useMenu from "../../../Hooks/UseMenu";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
// import MenuCard from "../../../components/MenuCard/MenuCard";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";
import "./Order.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";

const Order = () => {
  const categories = ["offered", "salad", "pizza", "soup", "desert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, menuLoading] = useMenu();
  // const popularMenu = menu.filter(item=> item.category === 'popular');
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const offeredMenu = menu.filter((item) => item.category === "offered");
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");

  if (menuLoading) {
    return <LoadingSpiner />;
  }

  return (
    <div>
      <Helmet>
        <title>RainbowFeast-OrderFood</title>
      </Helmet>
      <div className="mb-16">
        <Cover
          coverImg={orderCoverImg}
          title={"Order Food"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="mb-12 text-center uppercase font-bold">
          <Tab>Today Offered</Tab>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESERT</Tab>
          <Tab>DRINK</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={offeredMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={saladMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soupMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksMenu}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
