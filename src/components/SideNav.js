import React from "react";
import { connect } from "react-redux";
import { handleMenu } from "../redux/actions/globalActions";
import NavItem from "./NavItem";
import LockIcon from "@material-ui/icons/Lock";
import LinkIcon from "@material-ui/icons/Link";
import CallIcon from "@material-ui/icons/Call";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import { auth } from "../firebase/firebase";
import { handleLogout } from "../redux/actions/userActions";

const SideNav = ({ menuIsOpen, themeIsLight, handleLogout, user }) => {
  const handleSignOut = () => {
    auth.signOut().catch((err) => console.log(err.message));
    handleLogout();
    sessionStorage.removeItem("user");
  };
  return (
    <nav
      className={`sidenav ${menuIsOpen ? " sidenav--isOpen" : ""} ${
        themeIsLight ? "" : "sidenav--isDark"
      }`}
    >
      <ul className='sidenav__list'>
        <NavItem name='Home' link='/blog' icon={<HomeIcon />} menu />
        <NavItem
          name='Portfolio'
          link='https://mstdev89.github.io/portfolio/'
          icon={<LinkIcon />}
        />
        <NavItem name='Contact' link='/blog/contact' icon={<CallIcon />} menu />
        <NavItem name='Admin' link='/blog/admin' icon={<LockIcon />} menu />
        {user ? (
          <NavItem
            name='Logout'
            link='/blog'
            icon={<ExitToAppIcon />}
            menu
            func={handleSignOut}
          />
        ) : null}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  menuIsOpen: state.global.menuIsOpen,
  themeIsLight: state.global.themeIsLight,
  user: state.user.user,
});

export default connect(mapStateToProps, { handleMenu, handleLogout })(SideNav);
