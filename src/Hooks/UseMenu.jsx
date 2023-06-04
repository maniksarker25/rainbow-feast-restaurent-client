import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menu,setMenu] = useState([]);
  // const [loading,setLoading] = useState(true)
  // useEffect(()=>{
  //   setLoading(true);
  //   fetch('https://rainbow-feast-restaurant-server.vercel.app//menu')
  //   .then(res=>res.json())
  //   .then(data =>{
  //     setMenu(data);
  //     setLoading(false)
  //   })
  // },[])
  // return [menu,loading];

  // use tan stack query ------------
  const { data: menu = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch('https://rainbow-feast-restaurant-server.vercel.app//menu');
      // console.log(res.json());
      return res.json();
    }
  });
  return [menu, loading,refetch];
};

export default useMenu;
