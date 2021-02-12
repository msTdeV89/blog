import * as actions from "./actionTypes";
import { db } from "../../firebase/firebase";
import avatar from "../../assets/avatar.svg";

export const handleGetPosts = () => async (dispatch) => {
  await db
    .collection("posts")
    .get()
    .then((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        const {
          content,
          title,
          tags,
          intro,
          date,
          author,
          image,
          source,
        } = doc.data();
        const id = doc.id;
        const handleTags = () => {
          const t = tags.split(",").join("");
          const arr = t.split(" ");
          return arr;
        };
        const post = {
          id,
          content,
          title,
          tags: handleTags(),
          source,
          intro,
          image,
          avatar,
          date,
          author,
        };
        posts.push(post);
      });
      dispatch({
        type: actions.POSTS_GET,
        payload: posts,
      });
      sessionStorage.setItem("posts", JSON.stringify(posts));
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const handleAddPost = (post) => ({
  type: actions.POST_ADD,
  payload: post,
});
