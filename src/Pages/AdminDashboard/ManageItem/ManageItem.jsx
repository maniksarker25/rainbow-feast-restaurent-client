import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/UseMenu";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useState } from "react";

const ManageItem = () => {
  const [menu, menuLoading, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const [item, setItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  //   console.log(classes);

  const openModal = (id) => {
    setItem(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (menuLoading) {
    return <LoadingSpiner />;
  }

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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your Item Has Been Deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  // handle recipe update
  const handleUpdate = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const recipeDetails = form.recipeDetails.value;
    const updatedRecipe = {name,price,recipe:recipeDetails}
    // console.log(updatedRecipe)

  }
  return (
    <div>
      <SectionTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <div className="w-10/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>item image</th>
                <th>item name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <img
                        className="w-12 h-12 rounded-md"
                        src={item.image}
                        alt="item-image"
                      />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => openModal(item)}
                      className="bg-[#D1A054] p-3 rounded-md text-white"
                    >
                      <FaEdit />
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-600 p-3 rounded-md text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          {isOpen && (
            <div className="fixed inset-0  flex items-center justify-center z-30 shadow-xl">
              <div className="absolute px-8 md:px-16 bg-[#F3F3F3] lg:w-2/5 p-6 rounded-lg">
                <h2 className="text-2xl my-4 font-semibold">Update {item.name}</h2>
                <form onSubmit={handleUpdate}>
                  <div className="md:flex gap-4">
                    <div className="form-control w-full ">
                      <label className="label">
                        <span className="label-text">Recipe Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={item.name}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="form-control w-full ">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        defaultValue={item}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <textarea
                    className="textarea w-full my-4 h-32 textarea-bordered"
                    name="recipeDetails"
                    required
                    placeholder="Recipe Details"
                  ></textarea>

                  <div className="flex justify-between">
                    <input
                      className="gradient-btn cursor-pointer px-4 py-2"
                      type="submit"
                      value="Send Feedback"
                    />
                    <button
                      onClick={closeModal}
                      className="bg-gray-500 rounded-md font-semibold hover:bg-gray-700 text-white py-2 px-4"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
