import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './UseAxiosSecure';

const useCart = () =>{
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch,isLoading, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !!user?.email && !!token,
        //
        // queryFn: async ()=>{
        //     const response = await fetch(`https://rainbow-feast-restaurant-server.vercel.app/carts?email=${user?.email}`,{
        //         headers:{authorization: `bearer ${token}`}
        //     })
        //     return response.json();;
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