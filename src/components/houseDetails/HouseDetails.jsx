import { useParams } from "react-router-dom";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/Loader";

const HouseDetails = () => {
  const { id } = useParams();
  const axiosLocal = useAxiosLocal();

  const { isPending, data } = useQuery({
    queryKey: ["house-details", "my-added-food"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/house/${id}`);
      return res;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return <div></div>;
};

export default HouseDetails;
