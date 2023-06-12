import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async() => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // handle make admin 
  const handleMakeAdmin = user =>{
    fetch(`https://rainbow-feast-restaurant-server.vercel.app/users/admin/${user._id}`,{
      method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        refetch();
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title:`${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  // handle delete user
  const handleDeleteUser = (user) =>{
    console.log(user)
  }
  return (
    <div>
      <Helmet>
        <title>RainbowFeast-All Users</title>
      </Helmet>
      <SectionTitle
        subHeading={"---How many??---"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <div className="bg-white px-4 py-8 w-10/12 mx-auto ">
        <h3 className="text-2xl font-bold p-4 uppercase">
          All Users:{users.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead >
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>email</th>
                <th>role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user,index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                        user.role === 'admin'?'Admin': <button onClick={()=>handleMakeAdmin(user)} className="bg-[#D1A054] p-3 rounded-md"><FaUserShield className="cursor-pointer text-white text-xl"/></button>
                    }
                   
                  </td>
                  <td> <button onClick={()=>handleDeleteUser(user)} className="bg-red-500 p-3 rounded-md"> <FaTrashAlt
                        className="text-white  cursor-pointer"
                      /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
