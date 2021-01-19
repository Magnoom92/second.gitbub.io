import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);

  return (
    <div>
      <h1>Admin Posts</h1>
    </div>
  );
};

export default Posts;
