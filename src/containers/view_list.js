import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DataTable,TableHeader,Checkbox} from 'react-mdl';
import EditItem from './edit_item';
import DeleteItem from './delete_item'
import EditItemForm from './edit_item_form'
import {toggleCompleteToDo,editToDo,editItemMode, deleteToDo} from '../actions/index'
class ViewList extends Component{
	
	toggleComplete = (id) => {
		this.props.toggleCompleteToDo(id);
	}

	renderRows = (filterArr) => {
		return filterArr.map((item)=>{
			let {isCompleted,id,term,isEditMode} = item;
			let {editToDo, editItemMode, deleteToDo} = this.props
			if(isEditMode){
				return {
					id:id,
					selectable:<Checkbox checked={isCompleted} onChange={() => this.toggleComplete(id)} ripple/>,
					task: <EditItemForm term={term} id={id} editToDo={editToDo}/>,
					edit:'',
					delete:''
				}	
			}
			return {
					id:id,
					selectable:<Checkbox type="checkbox" checked={isCompleted} onChange={() => this.toggleComplete(id)} ripple/>,
					task:<span className={isCompleted?"green":"red"}>{term}</span>,
					edit:<EditItem id={id} editItemMode={editItemMode}/>,
					delete: <DeleteItem id={id} deleteToDo = {deleteToDo} />
				}
		})
	}
	render(){
		let {filterArr} = this.props;
		return (
			<DataTable
			    shadow={0}
			    rowKeyColumn="id"
			    rows={this.renderRows(filterArr)}
			>
				<TableHeader name="selectable" tooltip="select this">Select</TableHeader>
				<TableHeader name="task" tooltip="The task name">Task</TableHeader>
	    		<TableHeader name="edit" tooltip="Edit the task">Edit Task</TableHeader>
	    		<TableHeader name="delete" tooltip="Delete the task">Delete Task</TableHeader>
			</DataTable>)
	}
}

export default connect(null, {toggleCompleteToDo ,editToDo,editItemMode, deleteToDo})(ViewList)
