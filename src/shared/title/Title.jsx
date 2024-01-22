import "./style.css";

const Title = ({ title }) => {
  return (
    <div className="flex justify-center">
      <div className="two">
        <h1>
          {title}
          <span>Lorem ipsum dolor sit, amet consectetur </span>
        </h1>
      </div>
    </div>
  );
};

export default Title;
