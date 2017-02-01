import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteToDo} from '../actions/index';
class DeleteItem extends Component {
	constructor(props){
		super(props)
		this.onDeleteClick=this.onDeleteClick.bind(this)
	}
	onDeleteClick(event){
		event.preventDefault();
		this.props.deleteToDo(this.props.id)
	}
	render(){
		return(
			<a href="#" onClick={this.onDeleteClick} >Delete</a>
		)
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({deleteToDo}, dispatch);
}
export default connect(null, mapDispatchToProps)(DeleteItem)