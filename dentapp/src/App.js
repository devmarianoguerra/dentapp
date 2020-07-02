import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/index.js";
import { FaUserAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import IconButton from "./components/IconButton";

const cyan = "#00D9CC";

function App(props) {
  return (
    <>
      <IconButton
        onClick={() => console.log("se hizo click")}
        color={cyan}
        size={"100px"}
        icon={<FaUserAlt />}
        rounded
        centered
      />
    </>
  );
}

export default App;
