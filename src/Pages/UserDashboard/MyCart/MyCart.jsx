import useCart from "../../../Hooks/UseCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from 'react-icons/fa';


const MyCart = () => {
  const [cart] = useCart();
    const total = cart.reduce((sum,item)=> item.price + sum,0);
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"---My Cart---"}
          heading={"WANNA ADD MORE?"}
        ></SectionTitle>
        <div className="w-10/12 bg-white mx-auto mt-20">
          <div className="uppercase flex justify-between items-center px-4 py-4 mb-4">
            <h4 className=" md:text-3xl font-bold ">Total orders:{cart.length}</h4>
            <h4 className="md:text-3xl font-bold ">Total price:${total}</h4>
            <button className="bg-[#D1A054]  font-semibold rounded-md text-white px-4 py-2">
              Pay
            </button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="uppercase ">
                  <th>SL</th>
                  <th>Item image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="food image" />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <th>
                      <FaTrashAlt
                        className="text-red-600 w-10 cursor-pointer"
                      />
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
