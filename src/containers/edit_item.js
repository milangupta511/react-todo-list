import React,{Component} from 'react';

export default ({editItemMode, id}) => {
	const onEditClick = (event) => {
		event.preventDefault();
		editItemMode(id)
	}
	return(
		<a href="#" onClick={onEditClick} >Edit</a>
	)
}

