import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = async () => {
    alert("clicj");
  };

  return (
    <div className="my-10">
      <div className="bg-[#3fd0d4] p-10 w-[50%] mx-auto">
        <form onSubmit={handleRegister}>
          <h1 className="text-3xl font-bold text-white mb-4">Sign Up</h1>

          <div className="relative mt-3">
            <input
              type="text"
              name="name"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Enter name"
            />
            <FaUser className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="relative mt-3">
            <input
              type="email"
              name="email"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="E-mail"
            />
            <MdOutlineMail className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="relative mt-3">
            <input
              type="password"
              name="password"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Password"
            />
            <CiLock className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="mt-3 mb-4">
            <p className="font-Poppins mb-2 font-medium text-red-700">
              this ih my error
            </p>
            <button
              type="submit"
              className="py-3 hover:bg-[#6fdcdf] hover:text-white transition-all bg-white text-black font-Poppins font-semibold w-full"
            >
              REGISTER NOW
            </button>
          </div>
          <h1 className="font-Poppins text-white text-center">
            New here?{" "}
            <Link className="hover:underline font-semibold" to={"/register"}>
              Create a New Account
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
