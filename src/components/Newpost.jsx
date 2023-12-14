import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ enteredBody, cancel, setnewpost }) {
  const [body, setbody] = useState("");
  const [input, setinput] = useState("");
  const bodyhandle = (e) => {
    setbody(e.target.value);
  };
  const inputhandle = (e) => {
    setinput(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    const post = {
      body: body,
      author: input,
    };
    if (body && input) {
      setnewpost(post);
      cancel();
    }
  };
  let error;
  return (
    <form onSubmit={submit} className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyhandle} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={inputhandle} />
      </p>
      <p className={classes.actions}>
        <button onClick={cancel} type="button">
          cancel
        </button>
        <button type="submit">submit</button>
      </p>
    </form>
  );
}

export default NewPost;
