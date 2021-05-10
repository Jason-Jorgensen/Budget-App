import React from "react";

const FormsContext = React.createContext({
  login: "",
  language: "",
  image: "",
  handleBtnClick: () => {}
});

export default FormsContext;