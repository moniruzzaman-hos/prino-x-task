import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#000000]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-5 py-10 md:p-20 ">
        <div className="flex text-white justify-center items-center gap-16">
          <FaLinkedin className="text-3xl" />
          <FaTwitter className="text-3xl" />
          <FaYoutube className="text-3xl" />
          <FaInstagram className="text-3xl" />
        </div>
        <div className="flex text-white justify-center items-center gap-10">
          <Link to="/">PRIVACY + TERMS</Link>
          <Link to="/">GOOGLE</Link>
          <Link to="/">ALPHABET</Link>
        </div>
      </div>
      <div className="px-5 md:px-20 pb-7 -mt-7">
        <p className="text-xs text-gray-300 text-center md:text-start">
          X-Company, a division of Google LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
