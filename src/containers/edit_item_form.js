import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {editToDo} from '../actions/index';

class EditItemForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			term:this.props.term
		}
		this.onInputEdit=this.onInputEdit.bind(this);
		this.onFormSubmit=this.onFormSubmit.bind(this);
	}
	onInputEdit(event){
		this.setState({term:event.target.value})
	}
	onFormSubmit(event){
		event.preventDefault();
		this.props.editToDo(this.state.term, this.props.id)
	}
	render(){
		return (
			<form method="post" onSubmit={this.onFormSubmit}>
				<input type="text" value={this.state.term} onChange={this.onInputEdit} autoFocus/>
			</form>
				)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({editToDo}, dispatch);
}
export default connect(null, mapDispatchToProps)(EditItemForm);