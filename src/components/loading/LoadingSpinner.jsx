import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  ${(props) => props.theme.flex.flexCenter}
  height: 100vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${(props) => props.theme.colors.primary};
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      {console.log("loading...")}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
