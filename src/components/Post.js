import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleCloseMenu } from "../redux/actions/globalActions";

const Post = ({
  id,
  image,
  title,
  date,
  author,
  source,
  avatar,
  intro,
  tags,
  themeIsLight,
  handleCloseMenu,
}) => {
  const history = useHistory();

  return (
    <div
      className={`post ${themeIsLight ? "" : "post--isDark"}`}
      onClick={() => {
        handleCloseMenu();
        history.push(`/blog/post/${id}`);
      }}
    >
      <div className='post__image'>
        <img src={image} alt='screenshot' />
        <p className='post__source'>{source}</p>
      </div>
      <div className='post__title'>
        <h4>{title}</h4>
      </div>
      <div className='post__author'>
        <div className='post__authorLeft'>
          <img src={`${avatar}`} alt='user avatar' />
        </div>
        <div className='post__authorRight'>
          <p>{author}</p>
          <p className='post__date'>{date}</p>
        </div>
      </div>
      <div className='post__intro'>
        <p>{intro}</p>
      </div>
      <div className='post__tags'>
        {tags.map((tag) => (
          <div
            key={tag + Math.floor(Math.random() * 9403284023)}
            className={`post__tag ${themeIsLight ? "" : "post__tag--isDark"}`}
          >
            <p>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { handleCloseMenu })(Post);
