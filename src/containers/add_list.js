import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToDo} from '../actions/index';

class AddList extends Component{
	constructor(props){
			super(props);
			this.id=0;
	}
	onSubmitToDo = (event) => {
		event.preventDefault();
		let {value} =this.inputText
		if(value.trim()!=='') {
			this.props.addToDo(this.id, value);
			this.id++;
		}
		this.inputText.value = ''  //value='' wont work
	}
	
	render(){

		return(
			<form className="add-todo-form" method="POST" onSubmit={this.onSubmitToDo}>
				<input type="text"
					   ref={(input) => {this.inputText = input}} //called first time when the input is mounted
					   placeholder="Add your task here..."
					   autoFocus />
				<button type="submit"
						className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored add-todo-button">
  					<i className="material-icons">add</i>
				</button>
			</form>
		)
	}
	
}

export default connect(null, {addToDo})(AddList)