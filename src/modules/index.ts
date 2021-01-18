import { combineReducers } from 'redux';
import color from './color';
import signin from './signin';
import timer from './timer';
import selected from './selected';
import intro from './intro'

const rootReducer = combineReducers({
  color,
  signin,
  timer,
  selected,
  intro
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
