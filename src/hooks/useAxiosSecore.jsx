import { useEffect, } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'https://summer-camp-school-server-six.vercel.app', // Replace with your base URL
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);


    useEffect(() => {


        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers['Authorization'] = `bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response) {
                    const { status } = error.response;
                    if (status === 401 || status === 403) {
                        // Logout and redirect to login page
                        try {
                            await logOut();
                            navigate('/login');
                        } catch (error) {
                            console.log('Error logging out:', error);
                        }
                    }
                }
                return Promise.reject(error);
            }
        );


    }, [logOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;