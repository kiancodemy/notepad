import Post from "./Post";
import classes from "./postlist.module.css";
function Postlist() {
  return (
    <ul className={classes.posts}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </ul>
  );
}

export default Postlist;
