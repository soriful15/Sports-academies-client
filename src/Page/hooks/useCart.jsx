
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from './useAxioSecure';

const useCart = () => {
    // const { user, loading } = useAuth()
    const { user } = useAuth()
    // const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            // const response = await axiosSecure(`/carts?email=${user?.email}`)
            const response = await fetch(`http://localhost:4000/carts?email=${user?.email}`)
            // console.log('res from axios', response.data)
            // return response.data;
            return response.json()
        },

    })
    return [cart, refetch]
};

export default useCart;

