import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './UseAxiosSecure';

const useCart = () =>{
    const {user,loading} = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch,isLoading, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        //
        // queryFn: async ()=>{
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers:{authorization: `bearer ${token}`}
        //     })
        //     return response.json();
        // },
        queryFn: async ()=>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
      })
      return [cart,refetch,isLoading]
}

export default useCart;