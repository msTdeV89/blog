import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handleMenu,
  handleTheme,
  handleCloseMenu,
} from "../redux/actions/globalActions";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWhite.svg";
import logoBlack from "../assets/logoBlack.svg";
import { FormControlLabel, Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const Header = ({
  handleMenu,
  themeIsLight,
  handleTheme,
  menuIsOpen,
  handleCloseMenu,
}) => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const ThemeSwitch = withStyles({
    switchBase: {
      color: "#111111",
      "&$checked": {
        color: "#ffffff",
      },
    },
  })(Switch);
  const bars = ["menu__barTop", "menu__barMid", "menu__barBot"];

  return (
    <header
      className={`menu ${menuIsOpen ? "menu--isOpen" : ""} ${
        themeIsLight ? "" : "menu--isDark"
      }`}
    >
      <div className='menu__container'>
        <div className='menu__left'>
          <Link to='/blog' onClick={handleCloseMenu}>
            <img src={themeIsLight ? logoWhite : logoBlack} alt='logo mst' />
            <h3>
              ms<span>T</span>
            </h3>
          </Link>
        </div>
        <div className='menu__right'>
          <FormControlLabel
            label={`${themeIsLight ? "Dark" : "Light"}`}
            control={
              <ThemeSwitch
                checked={switchChecked}
                className='menu__switch'
                onChange={(e) => {
                  handleTheme();
                  setSwitchChecked(e.target.checked);
                }}
              />
            }
          ></FormControlLabel>
          <div className='menu__bars' onClick={handleMenu}>
            {bars.map((bar) => (
              <div
                key={bar}
                className={`menu__bar ${bar} ${
                  themeIsLight ? "" : "menu__bar--isDark"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <SideNav />
    </header>
  );
};

const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
  menuIsOpen: state.global.menuIsOpen,
});

export default connect(mapStateToProps, {
  handleMenu,
  handleTheme,
  handleCloseMenu,
})(Header);
