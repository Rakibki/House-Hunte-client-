import axios from "axios";

const axiosLocal = axios.create({
  baseURL: "https://dggfgfgfdggdfgdfgdfg.vercel.app",
  // baseURL: "https://dggfgfgfdggdfgdfgdfg-euasghvbm-rakibs-projects-ab620a78.vercel.app",
  withCredentials: true,
});

const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;
