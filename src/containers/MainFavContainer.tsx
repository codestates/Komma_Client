import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import MainFav from '../component/MainFav';
import { handleDeleteMode } from '../modules/mixtape';
import { handleListAddModal } from '../modules/mixtape';
import { addItem } from '../modules/mixtape';
import { deleteItem } from '../modules/mixtape';
import { setSoundListProperty } from '../modules/list';
import { setMixtapeProperty } from '../modules/mixtape';
import { handleSelectedIcon } from '../modules/mixtape';
import { handleLoginModal, handleLogin } from '../modules/signin';

const MainFavContainer: React.FC = () => {
  const backgroundColor = useSelector((state: RootState) => state.color.backgroundColor);
  const isListAddModalOn = useSelector((state: RootState) => state.mixtape?.isListAddModalOn);
  const isDeleteMode = useSelector((state: RootState) => state.mixtape?.isDeleteMode);
  const soundList = useSelector((state: RootState) => state.list.soundList);
  const mixtapes = useSelector((state: RootState) => state.mixtape?.mixtapes);
  const selectedIcon = useSelector((state:RootState) => state.mixtape?.selectedIcon);
  const playList = useSelector((state: RootState) => state.selected.playList);
  const width = useSelector((state: RootState) => state.setting.windowWidth);
  const isLogin = useSelector((state: RootState) => state.signin.isLogin);
  const dispatch = useDispatch();

  const onhandleListAddModal = () => {
    dispatch(handleListAddModal());
  }
  const onHandleDeleteMode = () => {
    dispatch(handleDeleteMode());
  }
  const onaddItem = (playlists: object) => {
    dispatch(addItem(playlists));
  }
  const ondeleteItem = (playlistsId: number) => {
    dispatch(deleteItem(playlistsId));
  }
  const onsetSoundListProperty = (modifiedSoundList: any[]) => {
    dispatch(setSoundListProperty(modifiedSoundList))
  }
  const onsetMixtapeProperty = (modifiedMixtape: any[]) => {
    dispatch(setMixtapeProperty(modifiedMixtape))
  }
  const onhandleSelectedIcon=(icon:string) =>{
    dispatch(handleSelectedIcon(icon))
  }
  const handlingLoginModal=() =>{
    dispatch(handleLoginModal())
  }
  const handlingLogin=() =>{
    dispatch(handleLogin())
  }

  return (
    <MainFav
      color={backgroundColor}
      isLogin={isLogin}
      width={width}
      playList={playList}
      isListAddModalOn={isListAddModalOn}
      isDeleteMode={isDeleteMode}
      mixtapes={mixtapes}
      soundList={soundList}
      selectedIcon={selectedIcon}
      onhandleSelectedIcon={onhandleSelectedIcon}
      onsetSoundListProperty={onsetSoundListProperty}
      onsetMixtapeProperty={onsetMixtapeProperty}
      onhandleListAddModal={onhandleListAddModal}
      onHandleDeleteMode={onHandleDeleteMode}
      onaddItem={onaddItem}
      ondeleteItem={ondeleteItem}
      handleLoginModal={handlingLoginModal}
      handleLogin={handlingLogin}
    />
  );
}


export default MainFavContainer;
