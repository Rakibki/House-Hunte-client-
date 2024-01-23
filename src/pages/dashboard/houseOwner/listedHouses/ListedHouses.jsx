import { useState } from "react";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import swal from "sweetalert";
import useAxiosLocal from "../../../../hooks/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/loader/Loader";
import Title from "../../../../shared/title/Title";
import { Rate } from "antd";
import { MdOutlineClose } from "react-icons/md";
import House from "../../../../components/house/House";

const ListedHouses = () => {
  const [user, setUser] = useState([]);
  const axiosLocal = useAxiosLocal();

  useCurrentUser().then((res) => setUser(res));

  const { isPending, data } = useQuery({
    queryKey: ["repoData", "my-added-food"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/houses?email=${user?.email}`);
      return res;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  const handleDlete = (id) => {
    alert(id);
    // swal({
    //   title: "Are you sure?",
    //   text: "Are you sure you want to delete the food?",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // }).then((willDelete) => {
    //   if (willDelete) {
    //     axiosLocal.delete(`/my_food_delete/${id}`).then((res) => {
    //       console.log(res);
    //       refetch();
    //     });
    //     swal("Deleted successfully", {
    //       icon: "success",
    //     });
    //   }
    // });
  };

  return (
    <div>
      <div className="border-2">
        <div>
          <Title title={"My Added Houses"} />
        </div>

        {data.data.length < 1 && (
          <p className="text-3xl font-semibold text-center text-[#ffa41f] my-6">
            You have no added food
          </p>
        )}

        <div className="grid lg:p-16 md:p-6 p-16 gap-4 md:grid-cols-2 mt-10">
          {data?.data?.map((house) => (
            <House key={house?._id} houseData={house} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedHouses;
