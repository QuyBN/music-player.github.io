import {combineReducers} from 'redux'
import playlist from './playlist';
const rootReducer = combineReducers({
        songs : playlist,
   })
export default rootReducer;
   