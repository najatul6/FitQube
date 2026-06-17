import React from "react";
import styled from "styled-components";

const ImageLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 50px;
    height: 50px;
    border: 2px solid #000;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default ImageLoader;