import Post from "./Post";
import NewPost from "./Newpost";
import classes from "./postlist.module.css";
function Postlist() {
  return (
    <>
      <NewPost></NewPost>
      <ul className={classes.posts}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </ul>
    </>
  );
}

export default Postlist;
