import {ADD_TODO, DELETE_TODO,EDIT_TODO,EDIT_ITEM_MODE,TOGGLE_COMPLETE} from '../actions/index';
export default function(state = [], action){
	var stateArr = state.slice(0)
	switch(action.type){
		case ADD_TODO :
		//We can also use state.concat([action.payload.data]) as it dont mutate state
			return [ ...state, {id: state.length, term:action.payload, isEditMode:false,isCompleted:false}]
		case DELETE_TODO :
			return stateArr.filter((item)=> item.id!==action.payload)
			
		case EDIT_TODO :
			for(let item of stateArr){
				if(item.id === action.payload.id){
					item.term = action.payload.term,
					item.isEditMode = false
				}
			}
			return stateArr
		case EDIT_ITEM_MODE :
			for(let item of stateArr){
				if(item.id === action.payload){
					item.isEditMode = true
				}
			}
			return stateArr
		case TOGGLE_COMPLETE :
			for(let item of stateArr){
				if(item.id === action.payload){
					item.isCompleted = ! item.isCompleted

				}
			}
			return stateArr
		}


	return state
}