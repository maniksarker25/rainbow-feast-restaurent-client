import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UseCart";

const MenuCard = ({ item }) => {
  const { image, name, recipe, price,_id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();
  // handle add to cart
  const handleAddToCart = (item) => {
    // console.log(item);
    if (user && user.email) {
      const cartItem = {menuId:_id,name,image,price,email:user.email}
      fetch("https://rainbow-feast-restaurant-server.vercel.app//carts",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
             refetch();// refetch data to update cart item number
            toast.success("Successfully Added In Cart!");
          }
        });
    } else {
      Swal.fire({
        title: "Please Login First To Add To Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Okey",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      });
    }
  };
  return (
    <div className="bg-[#F3F3F3] text-center">
      <div className=" relative ">
        <img className="w-full" src={image} alt="" />
        <p className="bg-[#111827] py-3 text-white text-center font-semibold px-6 absolute top-3 right-3">
          ${price}
        </p>
      </div>
      <div className="p-6">
        <h6 className="text-2xl my-3 font-semibold">{name}</h6>
        <p>{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="uppercase font-semibold mt-6 text-[#BB8506] bg-[#E8E8E8] px-6 py-3 rounded-lg border-b-2 border-[#BB8506] hover:bg-[#1F2937]"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
