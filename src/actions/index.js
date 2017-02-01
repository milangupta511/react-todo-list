export const ADD_TODO='ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const EDIT_ITEM_MODE = 'EDIT_ITEM_MODE'
export const TOGGLE_COMPLETE ='TOGGLE_COMPLETE'

export function addToDo(item){
	
 return({
 	type: ADD_TODO,
 	payload:item
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
		payload:{term,id}
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