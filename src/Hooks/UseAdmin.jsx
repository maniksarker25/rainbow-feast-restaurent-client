import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () =>{
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data:isAdmin, isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('is admin response ', res)
            return res.data.admin;
        }
    })
    return [isAdmin,isAdminLoading]

}
export default UseAdmin;