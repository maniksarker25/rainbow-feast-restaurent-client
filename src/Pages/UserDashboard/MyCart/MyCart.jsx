import Swal from "sweetalert2";
import useCart from "../../../Hooks/UseCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const totalPrice = parseFloat(total.toFixed(2));

  // handle delete item
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: ` Do you want to delete ${item.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`,{
            method:"DELETE"

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                refetch();
                Swal.fire("Deleted!", "Your Item Has Been Deleted.", "success");
            }
        })

      }
    });
  };
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"---My Cart---"}
          heading={"WANNA ADD MORE?"}
        ></SectionTitle>
        <div className="md:w-10/12 bg-white mx-auto mt-20">
          <div className="uppercase flex justify-between items-center px-4 py-4 mb-4">
            <h4 className=" md:text-3xl font-bold ">
              Total orders:{cart.length}
            </h4>
            <h4 className="md:text-3xl font-bold ">Total price:${totalPrice}</h4>
            <Link to='/dashboard/payment'><button className="bg-[#D1A054]  font-semibold rounded-md text-white px-4 py-2">
              Pay
            </button></Link>
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
                        onClick={() => handleDelete(item)}
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
