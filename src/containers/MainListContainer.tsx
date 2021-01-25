import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import MainList from '../component/MainList';
import { addList, deleteList, setList } from '../modules/selected';
import { getSoundList, setSoundListProperty } from '../modules/list';

const MainSelectedContainer: React.FC = () => {

  const playList = useSelector((state: RootState) => state.selected?.playList);
  const soundList = useSelector((state: RootState) => state.list.soundList);
  const dispatch = useDispatch();

  const addTheList = (item: object) => {
    dispatch(addList(item));
  };
  const deleteTheList = (itemId: number) => {
    dispatch(deleteList(itemId));
  };
  const setTheList = (list: any[]) => {
    dispatch(setList(list));
  };
  const setTheSoundListProperty = (modifiedSoundList: any[]) => {
    dispatch(setSoundListProperty(modifiedSoundList));
  };
  const getTheSoundList = (modifiedSoundList: any[]) => {
    dispatch(getSoundList(modifiedSoundList));
  };

  return (
    <MainList
      playList={playList}
      soundList={soundList}
      addList={addTheList}
      deleteList={deleteTheList}
      setList={setTheList}
      setSoundListProperty={setTheSoundListProperty}
      getSoundList={getTheSoundList}
    />
  );
}

export default MainSelectedContainer;
