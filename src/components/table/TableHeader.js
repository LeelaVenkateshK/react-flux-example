'use strict';
import React from "react";
import PropTypes from "prop-types";

class TableHeader extends React.Component {
    createTableHeaders = () => {
        let headers = [];
        if (this.props.data.length > 0) {
            headers.push(
                <th>{this.props.isAllSelected?
                    <input type="checkbox" onClick={this.props.selectAll} checked></input>:
                    <input type="checkbox" onClick={this.props.selectAll}></input>}
                </th>);
            for (let headerData in this.props.data) {
                headers.push(<th>{this.props.data[headerData]}</th>);
            }
        }
        else {
            headers = "No header data provided";
        }
        return headers;
    }

    render() {
        let header = this.createTableHeaders();
        console.log(header[0]);
        return (
            <tr>
                {header}
            </tr>
        );
    }
}
TableHeader.propTypes = {
    data: PropTypes.array.isRequired,
    selectAll: PropTypes.func.isRequired,
    isAllSelected: PropTypes.bool.isRequired
};
export  default  TableHeader;