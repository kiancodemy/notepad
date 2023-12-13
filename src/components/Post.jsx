function Post() {
  const choose = Math.random() > 0.5 ? "kiab" : "khar";
  return (
    <div>
      <div>{choose}</div>
      <div>get it</div>
    </div>
  );
}

export default Post;
