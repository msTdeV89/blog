import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { handlePopUp } from "../redux/actions/globalActions";

const PopUp = ({ themeIsLight, handlePopUp, popupIsOpen }) => {
  const [edit, setEdit] = useState("");

  const handleInput = (e) => {
    setEdit(e.targetValue);
  };
  return (
    <form className={`popUp ${popupIsOpen ? "popUp--isActive" : ""}`}>
      <div className='popUp__wrap'>
        <IconButton className='popUp__close' onClick={handlePopUp}>
          <CloseIcon />
        </IconButton>
        <div className='inputGroup'>
          <label htmlFor={edit} className='label'>
            Edit
          </label>
          <textarea
            required
            label='Edit'
            value={edit}
            rows={8}
            name='edit'
            onChange={(e) => handleInput(e)}
            className={`input ${themeIsLight ? "" : "input--isDark"}`}
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          size='medium'
          type='submit'
          className='btn popUp__close'
        >
          Close
        </Button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
  popupIsOpen: state.global.popupIsOpen,
});

export default connect(mapStateToProps, { handlePopUp })(PopUp);
