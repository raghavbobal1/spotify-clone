import React from "react";
import "./SideBarOption.css";

function SideBarOption({ option = "test", Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h5>{option}</h5> : <p>{option}</p>}
    </div>
  );
}

export default SideBarOption;
