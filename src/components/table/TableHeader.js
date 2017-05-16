'use strict';
import React from "react";
import PropTypes from "prop-types";
import Constants from "./../../constants/constants";
class TableHeader extends React.Component {
    createTableHeaders = () => {
        let headers = [];
        if (this.props.headers.length > 0) {
            headers.push(
                <th key="selectAll">{this.props.isAllSelected ?
                    <input type="checkbox" onClick={this.props.selectAll} checked></input> :
                    <input type="checkbox" onClick={this.props.selectAll}></input>}
                </th>);
            for (let headerData in this.props.headers) {
                if (Constants.DISPLAY_TABLE_HEADERS.includes(this.props.headers[headerData]))
                    headers.push(<th key={this.props.headers[headerData]}>
                        {this.props.headers[headerData]}
                    </th>);
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