export const ADD_TODO='ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const EDIT_ITEM_MODE = 'EDIT_ITEM_MODE'
export const TOGGLE_COMPLETE ='TOGGLE_COMPLETE'
export const VISIBILITY_FILTER = 'VISIBILITY_FILTER';
export function addToDo(id,term){
	
 return({
 	type: ADD_TODO,
 	term,id
 })
}
export function visibilityToDoFilter(filter){
	return ({
		type: VISIBILITY_FILTER,
		payload: filter
	})
}
export function deleteToDo(id){
	return({
		type:DELETE_TODO,
		payload:id
	})
}

export function editToDo(term,id){
	return({
		type:EDIT_TODO,
		term,id
	})
}
export function editItemMode(id){
	return({
		type:EDIT_ITEM_MODE,
		payload:id
	})
}

export function toggleCompleteToDo(id){
	return({
		type:TOGGLE_COMPLETE,
		payload:id
	})
}