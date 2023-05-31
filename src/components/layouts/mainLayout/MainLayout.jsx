import React from "react";
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import MyContents from "./../../common/mypage/MyContents";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MyContents />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
