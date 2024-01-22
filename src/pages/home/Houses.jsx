import { useEffect, useState } from "react";
import Title from "../../shared/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import House from "../../components/house/House";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("./houses.json")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

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
