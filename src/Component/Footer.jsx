import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center rounded-2xl my-10 bg-primary text-primary-content p-10">
      <aside>
       <img className="rounded-2xl w-18" src="/public/Screenshot 2025-05-22 210421.png" alt="" />
        <div>
          <Link to={"/"} className="text-lg font-semibold logoName ">
            <span className=" text-3xl  font-extrabold text-yellow-400">
              Inner
            </span>
            <span className="text-blue-500 text-3xl font-extrabold">Self</span>
          </Link>
        </div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
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
