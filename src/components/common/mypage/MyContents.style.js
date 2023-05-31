import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(to bottom, #0072ce, skyblue);
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  border: 1px solid blue;
  background-color: white;
  width: 1200px;
  height: 750px;
`;

export const InnerContainer = styled.div`
  height: 100%;
  background-color: pink;
  ${(props) => props.theme.flex.center}
`;

export const Inner = styled.div`
  ${(props) => props.theme.flex.between}
`;
