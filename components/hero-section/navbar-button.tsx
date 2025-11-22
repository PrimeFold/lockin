import React from 'react';
import styled from 'styled-components';

interface NavbarButtonProps {
  children: React.ReactNode;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <button>{children}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 0.8em 2em;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #fff;
    background-color: #334cec;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(51, 76, 236, 0.3);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #2a3ec7;
    box-shadow: 0px 15px 20px rgba(51, 76, 236, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  button:active {
    transform: translateY(-1px);
  }`;

export default NavbarButton;
