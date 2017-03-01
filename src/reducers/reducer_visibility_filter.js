import {VISIBILITY_FILTER} from '../actions/index'
import {SHOW_ALL} from '../config/visibility.js';
export default function(state = SHOW_ALL,action){
	switch(action.type){
		case VISIBILITY_FILTER: 
			return action.payload
	}
	return state
}