import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { handlePopUp } from "../redux/actions/globalActions";

const PostPanel = ({ handlePopUp }) => {
  return (
    <div className='postPage__panel'>
      <Button
        variant='contained'
        color='primary'
        size='medium'
        type='submit'
        className='btn'
        onClick={handlePopUp}
      >
        Edit Content
      </Button>
      <Button
        variant='contained'
        color='primary'
        size='medium'
        type='submit'
        className='btn'
      >
        Delete Post
      </Button>
    </div>
  );
};

export default connect(null, { handlePopUp })(PostPanel);
