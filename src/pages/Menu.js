import { MenuList } from "../helpers/MenuList";
import React from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import BgSVG from "../assets/pngwooden.png";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="menu"
      style={{ backgroundImage: `url(${BgSVG})`, backgroundSize: "cover" }}
    >
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
