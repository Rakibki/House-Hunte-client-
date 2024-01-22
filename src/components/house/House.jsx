const House = ({ houseData }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={houseData?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{houseData?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book</button>
        </div>
      </div>
    </div>
  );
};

export default House;
