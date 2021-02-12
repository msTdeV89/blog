import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleMenu } from "../redux/actions/globalActions";

const NavItem = ({ name, link, icon, handleMenu, menu, func }) => {
  return (
    <li
      className='navitem'
      onClick={() => {
        if (menu) handleMenu();
        if (func) func();
      }}
    >
      {menu ? (
        <Link to={link}>
          <span>{name}</span>
          {icon ? icon : ""}
        </Link>
      ) : (
        <a href={link} rel='noreferrer' target='_blank'>
          <span>{name}</span>
          {icon ? icon : ""}
        </a>
      )}
    </li>
  );
};

export default connect(null, { handleMenu })(NavItem);
