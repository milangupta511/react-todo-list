import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToDo} from '../actions/index';

class AddList extends Component{
	constructor(props){
			super(props);
			this.onSubmitToDo=this.onSubmitToDo.bind(this);
			this.onInputChange=this.onInputChange.bind(this)
			this.state={term:""}
		}
		onSubmitToDo(event){
			event.preventDefault();

			if(this.state.term.trim()!=='') {
				this.props.addToDo(this.state.term);
			}
			this.setState({term:""})
		}
		onInputChange(event){
			this.setState({term:event.target.value});
		}
	render(){

		return(
			<form className="add-todo-form" method="POST" onSubmit={this.onSubmitToDo}>
				<input type="text" placeholder="Add your task here..." value={this.state.term} onChange={this.onInputChange} autoFocus/>
				<button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored add-todo-button">
  					<i className="material-icons">add</i>
				</button>
			</form>
		)
	}
	
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({addToDo}, dispatch);
}
export default connect(null, mapDispatchToProps)(AddList)