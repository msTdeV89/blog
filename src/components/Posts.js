import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  return (
    <main className='section posts'>
      {posts
        .sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        })
        .map(
          ({
            id,
            image,
            title,
            date,
            author,
            avatar,
            intro,
            content,
            tags,
          }) => {
            return (
              <Post
                id={id}
                key={id}
                image={image}
                title={title}
                date={date}
                author={author}
                avatar={avatar}
                intro={intro}
                content={content}
                tags={tags}
              />
            );
          }
        )}
    </main>
  );
};

const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
});

export default connect(mapStateToProps)(Posts);
