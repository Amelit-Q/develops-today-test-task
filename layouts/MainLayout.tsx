import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = ({ children }) => {
  const MainLayoutWrapper = styled("div")``;
  return (
    <MainLayoutWrapper>
      <Navbar />
      {children}
    </MainLayoutWrapper>
  );
};

export default MainLayout;
