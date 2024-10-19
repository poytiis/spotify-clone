import axios from 'axios';

const baseURL = process.env.BASE_URL

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    'Content-Type': 'applicaion/json'
  }
});

export const logInAJAX = async (email:string, password: string) => {
  const postBody = { email, password }
  const res = await axiosInstance.post('auth/logIn', postBody)
  return res.data
}