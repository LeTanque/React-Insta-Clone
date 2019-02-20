import React from "react";

const withUserLogin = FirstComponent => SecondComponent => props => {
  if (localStorage.getItem("user")) {
    return <FirstComponent />;
  }
  return <SecondComponent />;
};

export default withUserLogin;
