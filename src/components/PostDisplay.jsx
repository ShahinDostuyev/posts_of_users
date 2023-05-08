import React from "react";
import { Table } from "reactstrap";

function PostDisplay({ posts, selectedUser }) {
  console.log(selectedUser);
  let filteredPosts;
  if (selectedUser === "0") {
    filteredPosts = posts;
  } else {
    filteredPosts = posts.filter(
      (post) => post.userId === Number(selectedUser)
    );
  }

  console.log(filteredPosts);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map((post) => {
          return (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.body}</td>
              <td>{post.title}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default PostDisplay;
