import React from "react";
import { connect } from "react-redux";

const Hero = ({ themeIsLight }) => {
  return (
    <div className={`section hero ${themeIsLight ? "" : "section--isDark"}`}>
      <div className='hero__container'>
        <h1 className='hero__title'>Blog</h1>
        <p>Blog about everything, and nothing.</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
});

export default connect(mapStateToProps, null)(Hero);
