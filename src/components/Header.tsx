import { HiChevronDown } from "react-icons/hi";

const Header = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-10">
      <div>
        <h1 className="font-poppins text-3xl text-white font-thin">
          I'm a <span className="font-semibold">Software engineering</span> and{" "}
          <span className="font-semibold">UI/UX Designer</span>
        </h1>
      </div>
      <div className="mt-10">
        <HiChevronDown size={30} color="white" />
      </div>
    </div>
  );
};

export default Header;
