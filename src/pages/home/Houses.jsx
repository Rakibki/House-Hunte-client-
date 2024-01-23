import Title from "../../shared/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import House from "../../components/house/House";
import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import Loader from "../../components/loader/Loader";

const Houses = () => {
  const axiosLocal = useAxiosLocal();

  const { isPending, data: houses } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const res = await axiosLocal.get("/houses");
      return res.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="my-10">
      <Title title={"Properties For Rent"} />

      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {houses.map((houseData, index) => (
            <SwiperSlide key={index}>
              <House houseData={houseData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Houses;
