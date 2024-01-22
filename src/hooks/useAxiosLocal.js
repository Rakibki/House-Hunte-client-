import axios from "axios";

const axiosLocal = axios.create({
  baseURL: "http://localhost:4001",
});

const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;
