import { Link } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import { useState } from "react";
import useAxiosLocal from "../../hooks/useAxiosLocal";

const House = ({ houseData }) => {
  const [user, setUser] = useState(null);
  const axiosLocal = useAxiosLocal();

  const handleBook = async (id) => {
    const bookInfo = {houseId: id, name: user?.name, email:user?.email}
    const res = await axiosLocal.post("/bookings", bookInfo)
    console.log(res)
  };

  useCurrentUser().then((res) => setUser(res));

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={houseData?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{houseData?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions flex items-center gap-2 justify-end">
          <Link to={`/house/${houseData?._id}`}>
            <button className="btn btn-primary">Detais</button>
          </Link>

          <button
            onClick={() => handleBook(houseData?._id)}
            className="btn btn-primary"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default House;
