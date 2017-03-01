import { combineReducers } from 'redux';
import AddToDoReducer from './reducer_add_todo';
import VisibilityFilterReducer from './reducer_visibility_filter';
const rootReducer = combineReducers({
	toDoList:AddToDoReducer,
	visibilityFilter: VisibilityFilterReducer
});

export default rootReducer;
