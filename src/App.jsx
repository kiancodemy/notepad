import Postlist from "./components/Postlist";
import MainHeader from "./components/Header";
import { useState } from "react";
function App() {
  const [close, setclose] = useState(false);
  const onCreatePost = () => {
    setclose(true);
  };

  return (
    <>
      <MainHeader onCreatePost={onCreatePost}></MainHeader>
      <Postlist close={close} setclose={setclose}></Postlist>
    </>
  );
}

export default App;
