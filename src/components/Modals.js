import React from 'react';
import styled from 'styled-components';

import { typeScale } from '../utils';

import { useSpring, animated, config } from 'react-spring';

import { illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElement};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;
const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0)' : 'translateY(-200%)',
    config: config.molasses,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={illustrations.SignUp}
          alt="Sign up fpr an account"
          aria-hidden="true"
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign Up today bla bla bla</SignUpText>
        <PrimaryButton>Sign Up</PrimaryButton>
        <CloseModalButton aria-label="Close Modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
