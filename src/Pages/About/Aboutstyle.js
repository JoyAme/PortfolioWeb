// Spinner.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import spinnerImage from '../../assest/images/gee.jpg'; // Replace with your spinner image path

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SpinnerImage = styled.img`
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerImage src={spinnerImage} alt="Spinner" />
    </SpinnerContainer>
  );
};

export default Spinner;
