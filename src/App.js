import { useEffect, useState } from "react";
import UserSelection from "./components/UserSelection";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import PostDisplay from "./components/PostDisplay";

function App() {
  const [users, setusers] = useState([]);
  const [posts, setposts] = useState([]);

  const [selectedUser, setSelectedUser] = useState("0");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setusers(res.data);
        console.log("User data is fetched");
      })
      .catch((err) => {
        console.log("Error occured when fetching data. " + err.toString());
      });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setposts(res.data);
        console.log("Post data is fetched");
      })
      .catch((err) => {
        console.log("Error occured when fetching data. " + err.toString());
      });
  }, []);

  function handleChange(chosen) {
    setSelectedUser(chosen);
  }

  return (
    <>
      <UserSelection users={users} handleChange={handleChange} />
      <PostDisplay posts={posts} selectedUser={selectedUser} />
    </>
  );
}

export default App;
