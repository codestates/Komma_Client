import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import MainHeader from '../component/MainHeader';

const MainHeaderContainer: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.signin.isLogin);

  return (
    <MainHeader 
      isLogin={isLogin}
    />
  );
}

export default MainHeaderContainer;
