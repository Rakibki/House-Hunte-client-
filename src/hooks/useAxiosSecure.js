import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://dggfgfgfdggdfgdfgdfg-euasghvbm-rakibs-projects-ab620a78.vercel.app",
  baseURL: "https://dggfgfgfdggdfgdfgdfg.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
