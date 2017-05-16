'use strict';
import React from "react";
import PropTypes from "prop-types";

class TableHeader extends React.Component {
    createTableHeaders = () => {
        let headers = [];
        if (this.props.headers.length > 0) {
            headers.push(
                <th>{this.props.isAllSelected?
                    <input type="checkbox" onClick={this.props.selectAll} checked></input>:
                    <input type="checkbox" onClick={this.props.selectAll}></input>}
                </th>);
            for (let headerData in this.props.headers) {
                headers.push(<th>{this.props.headers[headerData]}</th>);
            }
        }
        else {
            headers = "No header data provided";
        }
        return headers;
    }

    render() {
        let header = this.createTableHeaders();
        return (
            <tr>
                {header}
            </tr>
        );
    }
}
TableHeader.propTypes = {
    headers: PropTypes.array.isRequired,
    selectAll: PropTypes.func.isRequired,
    isAllSelected: PropTypes.bool.isRequired
};
export  default  TableHeader;