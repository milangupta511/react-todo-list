import React,{Component} from 'react';

class EditItemForm extends Component{
	
	onFormSubmit =(event) => {
		event.preventDefault();
		this.props.editToDo(this.inputText.value, this.props.id);
	}
	render(){
		return (
			<form method="post" onSubmit={this.onFormSubmit}>
				<input type="text" ref={(input) => {this.inputText = input}}/>
			</form>
				)
	}
	componentDidMount(){
		let {term} = this.props;
		this.inputText.value=term
		this.inputText.focus()
	}
}

export default EditItemForm;