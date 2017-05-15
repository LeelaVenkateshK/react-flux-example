import React from "react";
import PropTypes from "prop-types";

import TableHeader from "./TableHeader";
import TableData from "./TableData";
class TableComponent extends React.Component {
    constructor() {
        super();
        this.selectAll = this.selectAll.bind(this);
        this.state = {
            isAllSelected: false
        }
    }

    selectAll = (event) => {
        event.preventDefault();
        if (!this.state.isAllSelected) {
            console.log('select all');

        } else {
            console.log('unselect all');
        }
        this.setState({isAllSelected: !this.state.isAllSelected});
    }

    render() {
        return (
            <table className="table table-bordered table-hover table-responsive">
                <TableHeader data={this.props.headers} selectAll={this.selectAll}
                             isAllSelected={this.state.isAllSelected}/>
                <TableData data={this.props.tableData}/>
            </table>
        );
    }
}
TableComponent.propTypes = {
    headers: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired
};
export default TableComponent;