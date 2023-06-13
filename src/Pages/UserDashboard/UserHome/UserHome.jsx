import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaCalendarAlt, FaShoppingCart, FaStar } from "react-icons/fa";

const UserHome = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["user-stats"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/user-stats?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-4xl font-semibold ps-4 mt-12">Hi , Welcome Back</h1>
      <div className="w-10/12 mx-auto mt-32">
        <div className="md:flex">
          <div className="md:w-1/2 bg-[#FFEDD5] flex items-center justify-center p-16 ">
            <div>
              <img
                className="rounded-full w-56 h-56"
                src={user?.photoURL}
                alt=""
              />
              <h3 className="text-3xl text-center font-semibold mt-4">
                {user?.displayName}
              </h3>
              <p className="text-xl font-semibold text-center mt-3">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-12 bg-[#FEF9C3]">
            <h2 className="text-4xl font-semibold">Your Activities</h2>
            <div className="mt-6 text-xl uppercase font-semibold space-y-4">
              <p className="text-[#0088FE] flex gap-2 items-center">
                <FaShoppingCart></FaShoppingCart> Orders: {stats.orders}
              </p>
              <p className="text-[#00C4A1] flex gap-2 items-center">
                <FaStar /> Reviews: {stats.reviews}
              </p>
              <p
                className="text-[#FFBB28] flex gap-2 items-center"
              >
                  <FaCalendarAlt /> Bookings: {stats.bookings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
