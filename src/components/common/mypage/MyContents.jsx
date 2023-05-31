import React from "react";
import * as styled from "./MyContents.style";
import Personal from "./Personal";
import Stats from "./Stats";

const MyContents = () => {
  return (
    <>
      <styled.Background />
      <styled.Box>
        <styled.InnerContainer>
          <styled.Inner>
            <Personal />
            <Stats />
          </styled.Inner>
        </styled.InnerContainer>
      </styled.Box>
    </>
  );
};

export default MyContents;
