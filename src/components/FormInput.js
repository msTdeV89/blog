import React from "react";
import { connect } from "react-redux";

const FormInput = ({
  label,
  func,
  name,
  value,
  type,
  themeIsLight,
  err,
  required,
}) => {
  return (
    <div className='inputGroup'>
      <label htmlFor={name} className='label'>
        {name}
      </label>
      <input
        required
        onChange={func}
        name={name}
        value={value}
        variant='outlined'
        color='primary'
        label={label}
        type={type}
        className={`input ${themeIsLight ? "" : "input--isDark"}`}
      />
      {err ? <p className='error'>{err}</p> : ""}
    </div>
  );
};

const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
});

export default connect(mapStateToProps)(FormInput);
