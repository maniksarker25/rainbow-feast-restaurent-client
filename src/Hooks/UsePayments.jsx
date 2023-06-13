import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";


const UsePayments = () => {
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data:payments=[], isLoading:paymentLoading} = useQuery({
        queryKey:['payments', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async ()=>{
            const res = await axiosSecure('/payments')
            return res.data;
        }
    })
    return [payments,paymentLoading]
};

export default UsePayments;