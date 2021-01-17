import { combineReducers } from 'redux';
<<<<<<< HEAD

const rootReducer = combineReducers({
  //counter
});

export default rootReducer;
=======
import color from './color';
import signin from './signin';
import timer from './timer';
import selected from './selected';

const rootReducer = combineReducers({
  color,
  signin,
  timer,
  selected
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
>>>>>>> 51f18e86af62ae230d8dfa48f0b5669076879974
