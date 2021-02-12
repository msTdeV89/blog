import React, { useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import PostPage from "./pages/PostPage";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { persistUser } from "./redux/actions/userActions";
import { handleGetPosts } from "./redux/actions/postsActions";
import PopUp from "./components/PopUp";

function App({ themeIsLight, menuIsOpen, user, persistUser, handleGetPosts }) {
  useEffect(() => {
    persistUser(JSON.parse(sessionStorage.getItem("user")));
    handleGetPosts();
  }, [user, persistUser, handleGetPosts]);

  return (
    <div className={`app ${themeIsLight ? "" : "app--isDark"}`}>
      <Header />
      <PopUp />
      <div
        className={`app__container ${
          menuIsOpen ? "app__container--isOpen" : ""
        }`}
      >
        <Switch>
          <Route exact path='/blog' component={HomePage} />
          <Route
            path='/blog/admin'
            component={() => (
              <AdminPage themeIsLight={themeIsLight} user={user} />
            )}
          />
          <Route
            path='/blog/contact'
            component={() => <ContactPage themeIsLight={themeIsLight} />}
          />
          <Route
            path='/blog/post/:postId'
            component={() => (
              <PostPage themeIsLight={themeIsLight} user={user} />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
  menuIsOpen: state.global.menuIsOpen,
  posts: state.posts.posts,
  user: state.user.user,
});

export default connect(mapStateToProps, { persistUser, handleGetPosts })(App);
