import {combineReducers} from 'redux';
import courses from './courseReducer';
const rootReducer=combineReducers({
    afterChange:courses
})
export default rootReducer;