import React, { useState } from "react";
import { Button } from "@material-ui/core";
import FormInput from "./FormInput";
import { db } from "../firebase/firebase";
import { connect } from "react-redux";
import { handleAddPost } from "../redux/actions/postsActions";
import { useHistory } from "react-router-dom";

const Panel = ({ handleAddPost, themeIsLight }) => {
  const history = useHistory();
  const [image, setImage] = useState("");
  const [source, setSource] = useState("");
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    const { value, name } = e.target;
    if (name === "img") setImage(value);
    if (name === "source") setSource(value);
    if (name === "title") setTitle(value);
    if (name === "intro") setIntro(value);
    if (name === "tags") setTags(value);
    if (name === "content") setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      intro,
      source,
      tags,
      image,
      content,
      date: new Date().toLocaleString(),
      author: "msT",
    };
    await db.collection("posts").add(post);
    handleAddPost(post);
    setImage("");
    setSource("");
    setTitle("");
    setIntro("");
    setTags("");
    setContent("");
    history.push("/blog");
  };

  return (
    <form className='adminPage__form' onSubmit={(e) => handleSubmit(e)}>
      <h3>Panel</h3>
      <FormInput
        required
        label='Image'
        value={image}
        name='img'
        type='text'
        func={(e) => handleInput(e)}
      />
      <FormInput
        required
        label='Image Source'
        value={source}
        name='source'
        type='text'
        func={(e) => handleInput(e)}
      />
      <FormInput
        required
        label='Title'
        value={title}
        name='title'
        type='text'
        func={(e) => handleInput(e)}
      />
      <FormInput
        required
        label='Intro'
        value={intro}
        name='intro'
        type='text'
        func={(e) => handleInput(e)}
      />
      <FormInput
        required
        label='Tags'
        value={tags}
        name='tags'
        type='text'
        func={(e) => handleInput(e)}
      />
      <div className='inputGroup'>
        <label htmlFor='message' className='label'>
          Message
        </label>
        <textarea
          required
          rows={8}
          value={content}
          name='content'
          onChange={(e) => handleInput(e)}
          className={`input ${themeIsLight ? "" : "input--isDark"}`}
        ></textarea>
      </div>
      <Button
        variant='contained'
        color='primary'
        size='large'
        type='submit'
        className='btn'
      >
        Add Post
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  themeIsLight: state.global.themeIsLight,
});

export default connect(mapStateToProps, { handleAddPost })(Panel);
