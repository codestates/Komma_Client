import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import MainSelected from '../component/MainSelected';
import { handleList, addList, deleteList } from '../modules/selected';
import { setSoundListProperty } from '../modules/list';

const MainSelectedContainer: React.FC = () => {

  const soundList = useSelector((state: RootState) => state.list.soundList);
  const isListBarOpen = useSelector((state: RootState) => state.selected?.isListBarOpen);
  const playList = useSelector((state: RootState) => state.selected?.playList);
  const dispatch = useDispatch();

  const handleSelectedList = () => {
    dispatch(handleList());
  };
  const addTheList = (item: object) => {
    dispatch(addList(item));
  };
  const deleteTheList = (itemId: number) => {
    dispatch(deleteList(itemId));
  };
  const setTheSoundListProperty = (modifiedSoundList: any[]) => {
    dispatch(setSoundListProperty(modifiedSoundList));
  };

  return (
    <MainSelected
      soundList={soundList}
      isListBarOpen={isListBarOpen}
      playList={playList}
      handleList={handleSelectedList}
      addList={addTheList}
      deleteList={deleteTheList}
      setSoundListProperty={setTheSoundListProperty}
    />
  );
}

export default MainSelectedContainer;
