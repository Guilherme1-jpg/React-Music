import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import { IconContext } from "react-icons";
import * as VscIcons from "react-icons/vsc";
import * as AiIcons from "react-icons/ai";

import deezerLogo from "../../assets/deezer-logo.png";

import "./SideCustom.css";

function Sidebar() {
  const [side, setSide] = useState(true);

  const showSide = () => setSide(!side);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <div className="sideNav">
          <Link Link to="#" className="menu-bars">
            <VscIcons.VscThreeBars onClick={showSide} />
          </Link>
          <div className="initialLogo">
            <img src={deezerLogo} />
          </div>
        </div>

        <nav className={side ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSide}>
            <li className="side-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="logo">
              <img src={deezerLogo} />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
