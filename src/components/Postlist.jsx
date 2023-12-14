import Post from "./Post";
import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./Newpost";
import classes from "./postlist.module.css";
function Postlist({ close, setclose }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [allpost, setposts] = useState([]);

  const handler = () => {
    setclose(false);
  };

  const setnewpost = (post) => {
    setposts([...allpost, post]);
  };
  const allin = allpost.map((element) => {
    return (
      <div key={element.text}>
        <Post author={element.author} text={element.body}></Post>
      </div>
    );
  });
  return (
    <>
      {close && (
        <Modal close={handler}>
          <NewPost setnewpost={setnewpost} cancel={handler}></NewPost>
        </Modal>
      )}

      <ul className={classes.posts}>{allpost.length > 0 && allin}</ul>
      <ul>
        {allpost.length <= 0 && (
          <p
            style={{
              textAlign: "center",
              color: "white",
              textTransform: "capitalize",
              fontSize: "25px",
              fontStyle: "italic",
            }}
          >
            there are no post yet !!
          </p>
        )}
      </ul>
    </>
  );
}

export default Postlist;
