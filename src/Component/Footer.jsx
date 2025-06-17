import React, { use } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router";
import { ThemeContext } from "./Context/ThemeContext";
import logo from "../assets/Logo.png";
const Footer = () => {
  const { theme } = use(ThemeContext);

  return (
    <footer
      className={`footer footer-horizontal footer-center rounded-2xl my-10 text-white  p-10 py-10 ${
        theme === "dark" ? "bg-violet-300" : "bg-[#314158]"
      }`}
    >
      <aside>
        <img className="rounded-2xl w-18" src={logo} alt="logo" />
        <div>
          <Link to={"/"} className="text-lg font-semibold logoName ">
            <span className="text-yellow-600 text-3xl font-bold">Epiq</span>
            <span className="text-yellow-300 text-3xl font-bold">Dine</span>
          </Link>
        </div>
        <p className={theme == "dark" ? "text-black" : " text-white"}>
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <nav>
            <div className="grid grid-flow-col gap-4">
              {/* linkedin */}
              <Link
                target="_blank"
                to={
                  "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=arpan-dey-043881278"
                }
              >
                <FaLinkedinIn size={30} />
              </Link>
              {/* github */}
              <Link target="_blank" to={"https://github.com/Arpan-collab"}>
                <FaGithub size={30} />
              </Link>
              <Link
                target="_blank"
                to={"https://www.facebook.com/arpandey5000"}
              >
                <FaFacebook size={30} />
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
