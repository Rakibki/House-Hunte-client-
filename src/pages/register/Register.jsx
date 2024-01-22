import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;
    const role = e.target.role.value;

    console.log({ name, email, password, phone, role });
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

          <div className="relative mt-3">
            <input
              type="number"
              name="phone"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
              placeholder="Enter phone Number"
            />
            <IoPhonePortraitOutline className="absolute text-xl left-3 text-white top-[30%]" />
          </div>

          <div className="relative mt-3">
            <select
              name="role"
              className="bg-[#6fdcdf] w-full text-white placeholder:text-white py-3 pl-10 pr-6 text-lg outline-none"
            >
              <option value="House Owne">House Owne</option>
              <option value="House Renter">House Renter</option>
            </select>
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
