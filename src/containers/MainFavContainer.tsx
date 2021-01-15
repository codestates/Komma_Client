import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import MainFav from '../component/MainFav';

const MainFavContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  return(
    <MainFav color={backgroundColor}/>
  );
}


export default MainFavContainer;
