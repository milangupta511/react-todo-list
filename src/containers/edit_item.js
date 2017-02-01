import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editItemMode} from '../actions/index';
class EditItem extends Component {
	constructor(props){
		super(props)
		this.onEditClick=this.onEditClick.bind(this)
	}
	onEditClick(event){
		event.preventDefault();
		this.props.editItemMode(this.props.id)
	}
	render(){
		return(
			<a href="#" onClick={this.onEditClick} >Edit</a>
		)
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({editItemMode}, dispatch);
}
export default connect(null, mapDispatchToProps)(EditItem)