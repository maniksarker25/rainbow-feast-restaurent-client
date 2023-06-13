import UsePayments from "../../../Hooks/UsePayments";
import LoadingSpiner from "../../../components/LoadingSpiner/LoadingSpiner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AllOrders = () => {
    const [payments,paymentLoading] = UsePayments();
    if(paymentLoading){
        return <LoadingSpiner/>
    }
    return (
        <div>
            <SectionTitle subHeading={"---all order here---"} heading={"All Orders"}/>
            <div className="bg-white px-4 py-8 w-10/12 mx-auto ">
        <h3 className="text-2xl font-bold p-4 uppercase">
          All Orders:{payments.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
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
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>
                    {payment.itemNames.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </td>
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

export default AllOrders;