import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";

const MyBookings = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: bookings = [], isLoading: bookingLoading } = useQuery({
    queryKey: ["my-bookings", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/bookings?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(bookings);

  if (bookingLoading) {
    return <LoadingSpiner />;
  }
  return (
    <div>
      <SectionTitle
        subHeading={"---Excellent Ambience---"}
        heading={"MY BOOKINGS"}
      />
      <div>
        <div className="bg-white px-4 py-8 w-10/12 mx-auto ">
          <h3 className="text-2xl font-bold p-4 uppercase">
            All Bookings:{bookings.length}
          </h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>email</th>
                  <th> Guest</th>
                  <th>Total Price</th>
                  <th> Date</th>
                  <th> Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <th>{index + 1}</th>
                    <td>{booking.email}</td>
                    <td>{booking.guest}</td>
                    <td>{booking.price}</td>
                    <td>{booking.date}</td>
                    <td>{booking.status}</td>
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

export default MyBookings;
