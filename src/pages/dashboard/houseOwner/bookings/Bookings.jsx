import Loader from "../../../../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../../../hooks/useAxiosLocal";
import { useEffect, useState } from "react";
import useCurrentUser from "../../../../hooks/useCurrentUser";

const Bookings = () => {
  const axiosLocal = useAxiosLocal();
  const [user, setUser] = useState(null);

  useCurrentUser().then((res) => setUser(res));

  useEffect(() => {
    axiosLocal.get(`/bookingss`, user);
  }, []);

  return <div>dfsdfsdf</div>;
};

export default Bookings;
