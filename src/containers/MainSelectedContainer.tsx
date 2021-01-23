import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import MainSelected from '../component/MainSelected';
import { handleList } from '../modules/selected';

const MainSelectedContainer: React.FC = () => {

  const isListBarOpen = useSelector((state: RootState) => state.selected.isListBarOpen);
  const dispatch = useDispatch();

  const handleSelectedList = () => {
    dispatch(handleList());
  };

  return (
    <MainSelected
      isListBarOpen={isListBarOpen}
      handleList={handleSelectedList}
    />
  );
}

export default MainSelectedContainer;