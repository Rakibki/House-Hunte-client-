import abboutImage from "../../assets/images/abbout.jpg";

const About = () => {
  return (
    <div className="grid my-20 items-center lg:h-screen overflow-hidden grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold text-center">Luxury in every detail</h1>
        <h1 className="text-xl text-center mt-10">Interior of volumes, space, air, proportion, with certain <br /> light and mood. These interiors are meant to last forever.</h1>
      </div>
      <div>
        <img className="w-full" src={abboutImage} alt="" />
      </div>
    </div>
  );
};

export default About;
