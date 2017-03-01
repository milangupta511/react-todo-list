import React,{Component} from 'react';

export default ({deleteToDo, id}) => {
	const onDeleteClick = (event) => {
		event.preventDefault();
		deleteToDo(id)
	}
	return (
			<a href="#" onClick={onDeleteClick} >Delete</a>
		)
}
