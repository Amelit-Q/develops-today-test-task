import axios from "axios";
import React from "react";
import MainLayout from "../../layouts/MainLayout";

export default function CreatePost() {
  const [input, setInput] = React.useState("");
  const [titleItem, setTitleItem] = React.useState([]);
  const [textArea, setTextArea] = React.useState("");
  const [bodyItem, setBodyItem] = React.useState([]);

  console.log(titleItem, bodyItem, "title item plus bodyitem");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value);
  };

  //   const handleButtonClick = (e) => {
  //     e.preventDefault();
  //     setTitleItem([...titleItem, input]);
  //     setBodyItem([...bodyItem, textArea]);
  //   };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTitleItem([...titleItem, input]);
    setBodyItem([...bodyItem, textArea]);

    console.log("form was triggered");

    const response = await axios.post("https://simple-blog-api.crew.red/posts", {
      body: JSON.stringify({
        title: titleItem,
        body: bodyItem,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <MainLayout>
      {/* <form onSubmit={handleFormSubmit} type="button">
        <input
          type="text"
          placeholder="type your post here"
          value={text}
          onChange={handleTextChange}
        />
        <button onClick={handleButtonClick}>Add a post</button>
      </form> */}
      <form onSubmit={handleFormSubmit}>
        <h1>Create New Post</h1>
        <input
          type="text"
          placeHolder="title"
          size="39"
          required
          value={input}
          onChange={handleInputChange}></input>
        <br />
        <br />
        <textarea
          placeHolder="Enter the post message here"
          rows="8"
          cols="41"
          required
          value={textArea}
          onChange={handleTextAreaChange}></textarea>
        <br />
        <br />
        <button>Save Post</button>
      </form>
    </MainLayout>
  );
}
