"use client";
import styled from 'styled-components';
import { ReactNode } from 'react';

interface GetStartedButtonProps {
  children?: ReactNode;
}

const GetStartedButton = ({ children }: GetStartedButtonProps) => {
  return (
    <StyledWrapper>
      <button className="btn-53">
        <div className="original">{children || 'Button'}</div>
        <div className="letters">
          {children}
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-53,
  .btn-53 *,
  .btn-53 :after,
  .btn-53 :before,
  .btn-53:after,
  .btn-53:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-53 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
  }

  .btn-53:disabled {
    cursor: default;
  }

  .btn-53:-moz-focusring {
    outline: auto;
  }

  .btn-53 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-53 [hidden] {
    display: none;
  }

  .btn-53 {
    border: 1px solid;
    border-radius: 999px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    overflow: hidden;
    padding: 0.5rem 1rem;
    position: relative;
    text-transform: none;
    font-size: 0.875rem;
  }
  
  @media (min-width: 640px) {
    .btn-53 {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
  
  @media (min-width: 1024px) {
    .btn-53 {
      font-size: 1.125rem;
    }
  }

  .btn-53 .original {
    background: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    inset: 0;
    position: absolute;
    transition: transform 0.15s cubic-bezier(0.87, 0, 0.13, 1); /* 3/4 duration of original */
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.15s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.15s; /* 3/4 duration of original */
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.075s; /* 3/4 delay of original */
  }

  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.15s; /* 3/4 delay of original */
  }

  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.225s; /* 3/4 delay of original */
  }

  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.3s; /* 3/4 delay of original */
  }

  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.375s; /* 3/4 delay of original */
  }`;

export default GetStartedButton;
