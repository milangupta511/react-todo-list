import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterToDo, visibilityToDoFilter} from '../actions/index';
import ViewList from '../containers/view_list';
import {Tabs,Tab,Badge} from 'react-mdl';
import {SHOW_ALL,SHOW_PENDING,SHOW_COMPLETED} from '../config/visibility';

class FilterList extends Component{
	
    onTabChange = (tabId) => {
        const filters = [SHOW_ALL,SHOW_PENDING,SHOW_COMPLETED];
        this.props.visibilityToDoFilter(filters[tabId]);
    }
    filterList = (list) => {
        return (activeTab) => {
            switch(activeTab){
                case 0:
                    return list
                case 1:
                    return list.filter((item) => !item.isCompleted)
                case 2:
                    return list.filter((item) => item.isCompleted)
            }
            return false
        }
    }
    render() {
        const {visibilityFilter, toDoList} = this.props,
        filterListTab = this.filterList(toDoList)

        return (
            <div className="demo-tabs">
                <Tabs activeTab={visibilityFilter} onChange={this.onTabChange} ripple>
                    <Tab><Badge text={filterListTab(0).length}>All</Badge></Tab>
                    <Tab><Badge text={filterListTab(1).length}>Pending</Badge></Tab>
                    <Tab><Badge text={filterListTab(2).length}>Completed</Badge></Tab>
                </Tabs>
                <section>
                    <div className="content"><ViewList filterArr={filterListTab(visibilityFilter)}/></div>
                </section>
            </div>    
        );
    }
}

const mapStateToProps = ({toDoList, visibilityFilter}) => {
    let filterToId = {
        SHOW_ALL:0,
        SHOW_PENDING:1,
        SHOW_COMPLETED:2
    } 
	return {toDoList, visibilityFilter:filterToId[visibilityFilter] }
}
export default connect(mapStateToProps, {visibilityToDoFilter})(FilterList)