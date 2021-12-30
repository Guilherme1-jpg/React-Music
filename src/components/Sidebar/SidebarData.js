import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiTwotoneHome />,
    cName: "nav-text",
  },

  {
    title: "Musicas",
    path: "/music",
    icon: <FcIcons.FcMusic />,
    cName: "nav-text",
  },

  {
    title: "Favoritos",
    path: "/favorite",
    icon: <FiIcons.FiHeart />,
    cName: "nav-text",
  },

  {
    title: "Ajuda",
    path: "/help",
    icon: <FiIcons.FiHelpCircle />,
    cName: "nav-text",
  },
];
