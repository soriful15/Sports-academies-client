
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxioSecure';

const useCart = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', response.data)
            return response.data;
        },

    })
    return [cart, refetch]
};

export default useCart;

