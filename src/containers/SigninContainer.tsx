import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Signin from '../component/Signin';
import { handleSignupModal, handleLoginModal } from '../modules/signin';

const SigninContainer: React.FC = () => {
  const isSignupModalOn = useSelector((state: RootState) => state.signin.isSignupModalOn);
  const dispatch = useDispatch();

  const handlingSignupModal = () => {
    dispatch(handleSignupModal());
  }
  const handlingLoginModal = () => {
    dispatch(handleLoginModal());
  }

  return (
    <Signin
      isSignupModalOn={isSignupModalOn}
      handleSignupModal={handlingSignupModal}
      handleLoginModal={handlingLoginModal}
    />
  );
}

export default SigninContainer;
