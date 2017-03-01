import {ADD_TODO, DELETE_TODO,EDIT_TODO,EDIT_ITEM_MODE,TOGGLE_COMPLETE} from '../actions/index';
export default function(state = [], action){
	switch(action.type){
		case ADD_TODO :
		//We can also use state.concat([action.payload.data]) as it dont mutate state
			return [ ...state, {id: action.id, term:action.term, isEditMode:false,isCompleted:false}]

		case DELETE_TODO :
			return state.filter((item)=> item.id!==action.payload)
			
		case EDIT_TODO :
			return state.map((item)=>{
				return item.id === action.id ? {...item, term:action.term, isEditMode: false} : item
			})

		case EDIT_ITEM_MODE :
			return state.map((item)=>{
				return item.id === action.payload? {...item, isEditMode: true} : item
			})

		case TOGGLE_COMPLETE :
			return state.map((item)=>{
				return item.id === action.payload ? {...item, isCompleted: !item.isCompleted}: item
			})
		}
		
	return state
}