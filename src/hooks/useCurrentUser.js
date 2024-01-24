import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "./useAxiosLocal";

const useCurrentUser = async () => {
  const axiosLocal = useAxiosLocal();

  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosLocal.get("/currentUser");
      return await res.data;
    },
  });


  return user;
};

export default useCurrentUser;
