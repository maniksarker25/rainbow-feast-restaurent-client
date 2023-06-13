import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import LoadingSpiner from "../../../../components/LoadingSpiner/LoadingSpiner";


const AllCostumer = () => {
    const [axiosSecure] = useAxiosSecure();

    const {data:costumers=[], isLoading:costumerLoading} = useQuery({
        queryKey:['costumers'],
        queryFn: async ()=>{
            const res = await axiosSecure('/costumers?role=user')
            return res.data;

        }
    })

    if(costumerLoading){
        return <LoadingSpiner/>
    }
    return (
        <div>
            <SectionTitle heading={"Our all costumers"} subHeading={"---costumers---"}></SectionTitle>
            <div className="bg-white px-4 py-8 w-10/12 mx-auto ">
        <h3 className="text-2xl font-bold p-4 uppercase">
          All Costumers:{costumers.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead >
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Name</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {costumers.map((costumer,index) => (
                <tr key={costumer._id}>
                  <th>{index + 1}</th>
                  <th><img className="w-10 h-10" src={costumer?.photoURL} alt="" /></th>
                  <td>{costumer.name}</td>
                  <td>{costumer.email}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default AllCostumer;