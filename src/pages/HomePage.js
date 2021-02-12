import React from "react";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import { connect } from "react-redux";

const HomePage = ({ posts }) => {
  return (
    <div className='homePage'>
      <Hero />
      <Posts posts={posts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, null)(HomePage);
