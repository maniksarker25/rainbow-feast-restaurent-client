import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";
import Swal from "sweetalert2";
import moment from "moment";


const ManageBooking = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data:bookings=[],refetch,isLoading:bookingLoading} = useQuery({
        queryKey: ['bookings'],
        queryFn:async()=>{
            const res = await axiosSecure('/bookings')
            return res.data;
        }
    })


    // handle status 
     const handleStatus = (id,status)=>{
        axiosSecure.patch(`/update-booking-status/${id}/?status=${status}`)
        .then(data=>{
            if(data.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title:`Booking Status Updated`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
     }


    if(bookingLoading){
        return <LoadingSpiner/>
    }

    return (
        <div>
            <SectionTitle subHeading={"---At a Glance!---"} heading={"MANAGE ALL BOOKINGS"}></SectionTitle>
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
                <th>Email</th>
                <th>Guest</th>
                <th>Total Price</th>
                <th>Booking Date</th>
                <th>Status</th>
                <th>action</th>
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
                  <td>{moment(booking.date).format('MMMM Do YYYY')}</td>
                  <td>{booking.status}</td>
                  <td className="flex gap-2">
                    <button disabled={booking.status === "denied" || booking.status === 'approved'} onClick={()=>handleStatus(booking._id,'denied')} className="bg-red-500 px-4 py-2 rounded-md text-white ">Deny</button>
                    <button disabled={booking.status === 'approved' || booking.status === "denied"} onClick={()=>handleStatus(booking._id,'approved')} className="bg-green-500 px-4 py-2 rounded-md text-white ">Approve</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default ManageBooking;