import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PostPanel from "../components/PostPanel";

const PostPage = ({ themeIsLight }) => {
  const posts = JSON.parse(sessionStorage.getItem("posts")) || [];
  const history = useHistory();
  const path = history.location.pathname.substring(11);

  const {
    author,
    avatar,
    source,
    intro,
    date,
    image,
    tags,
    title,
    content,
  } = posts.find((post) => post.id === path);
  return (
    <div className='page postPage'>
      <PostPanel />
      <figure className='postPage__image'>
        <img src={`${image}`} alt={image} />
        <figcaption>
          Image source:
          <a
            href={source}
            target='_blank'
            rel='noreferrer'
            className='postPage__source'
          >
            {source}
          </a>
        </figcaption>
      </figure>
      <div className='postPage__title'>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <div className='postPage__author'>
        <Avatar alt='user avatar' src={avatar} />
        <p>{author}</p>
      </div>
      <div className='postPage__intro'>
        <p>{intro}</p>
      </div>
      <div className='postPage__content'>
        <p>{content}</p>
      </div>
      <div className='postPage__tags'>
        {tags.map((tag) => (
          <p
            key={tag}
            className={`postPage__tag ${
              themeIsLight ? "" : "postPage__tag--isDark"
            }`}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
