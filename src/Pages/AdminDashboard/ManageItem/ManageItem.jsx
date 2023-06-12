import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/UseMenu";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

const ManageItem = () => {
  const [menu, menuLoading, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

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
                    <button className="bg-[#D1A054] p-3 rounded-md text-white">
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
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
