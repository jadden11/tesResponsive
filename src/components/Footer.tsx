import { CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <h1 className="font-inter text-5xl font-extralight py-5 text-white">
          Get <span className="font-semibold">in Touch.</span>
        </h1>
        <p className="font-inter text-sm font-extralight text-white">
          So that we can talk more about...
        </p>
      </div>
      <div>
        <div className="flex items-center gap-9 justify-center py-7">
          <CiMail size={25} color="white" />
          <FaInstagram size={25} color="white" />
          <FaLinkedinIn size={25} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
