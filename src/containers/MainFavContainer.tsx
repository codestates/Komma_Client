import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import MainFav from '../component/MainFav';
import {handleDeleteMode} from '../modules/mixtape';
import {handleListAddModal} from '../modules/mixtape';


const MainFavContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  const isListAddModalOn = useSelector((state: RootState) => state.mixtape?.isListAddModalOn);
  const isDeleteMode = useSelector((state: RootState) => state.mixtape?.isDeleteMode);
  const dispatch = useDispatch();

  const onhandleListAddModal = () =>{
    dispatch(handleListAddModal());
  }
  const onHandleDeleteMode = () => {
    dispatch(handleDeleteMode());
  }


  return (
    <MainFav 
    color={backgroundColor} 
    isListAddModalOn={isListAddModalOn}
    isDeleteMode={isDeleteMode}
    onhandleListAddModal={onhandleListAddModal}
    onHandleDeleteMode={onHandleDeleteMode}
    />
  );
}


export default MainFavContainer;
