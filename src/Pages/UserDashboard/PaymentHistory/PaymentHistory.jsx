import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";


const PaymentHistory = () => {

    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data:paymenHistory=[], isLoading:paymentHistoryLoading} = useQuery({
        queryKey:['payment-history', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async ()=>{
            const res = await axiosSecure(`/payment-history?email=${user?.email}`)
            return res.data;
        }
    })


    if(paymentHistoryLoading){
        return <LoadingSpiner/>
    }

    return (
        <div>
            <SectionTitle subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"}/>
            <div className="bg-white px-4 py-8 w-10/12 mx-auto ">
        <h3 className="text-2xl font-bold p-4 uppercase">
          All Users:{paymenHistory.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead >
              <tr>
                <th>SL</th>
                <th>Items</th>
                <th>email</th>
                <th>Total Price</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {paymenHistory.map((payment,index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.itemNames.map(item=><p key={item}>{item}</p>)}</td>
                  <td>{payment.email}</td>
                  <td>{payment.price}</td>
                  <td>{payment.date}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        </div>
    );
};

export default PaymentHistory;