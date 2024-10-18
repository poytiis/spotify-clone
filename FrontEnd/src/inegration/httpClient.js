import axios from 'axios';

const baseURL = process.env.BASE_URL

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        'Content-Type': 'applicaion/json'
    }
});


const logInAJAX = async (email, password) => {
    const postBody = { email, password }
    const res = await axiosInstance.post('auth/logIn', postBody)
    return res.body
}