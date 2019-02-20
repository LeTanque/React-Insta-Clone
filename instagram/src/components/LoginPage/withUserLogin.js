import React from "react";

const withUserLogin = App => LoginPage => props => {
  if (localStorage.getItem("user")) {
    return <PostsPage />;
  }
  return <LoginPage />;
};

export default withUserLogin;
