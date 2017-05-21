import React from "react";
import PropTypes from "prop-types";

import Constants from "./../../constants/constants";

class TableComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            isAllSelected: false,
            selectedRows: {}
        };
        this._selectAll = this._selectAll.bind(this);
        this._selectRow = this._selectRow.bind(this);
    }

    _createTableRows = () => {
        let dataRows = [];
        for (const dataRow of this.props.tableData) {
            let currRow = [];
            currRow.push(this.state.isAllSelected ?
                <input type="checkbox" onClick={this._selectRow} checked/> :
                <input type="checkbox" onClick={this._selectRow}/>);
            for (let header of Constants.TABLE_HEADERS_GIT) {
                header === 'avatar_url' ? currRow.push(
                    <td><img src={dataRow[header]} height={`20px`} width={`20px`}/></td>) :
                    currRow.push(<td key={dataRow[header]}>{JSON.stringify(dataRow[header])}</td>);
            }
            dataRows.push(<tr key={dataRow.login}>{currRow}</tr>);
        }
        return dataRows;
    }

    _selectAll = (event) => {
        if (!this.state.isAllSelected) {
            console.log('select all');

        } else {
            console.log('unselect all');
        }
        this.setState({isAllSelected: !this.state.isAllSelected});
    }

    _selectRow = (event) => {
        event.target.value;
        console.log('clicked ' + event.target.name);
    }

    _createTableHeaders = () => {
        let headers = [];
        if (this.props.headers.length > 0) {
            headers.push(
                <th key="selectAll">{this.state.isAllSelected ?
                    <input type="checkbox" onClick={this._selectAll} checked></input> :
                    <input type="checkbox" onClick={this._selectAll}></input>}
                </th>);
            for (let headerData of this.props.headers) {
                headers.push(<th key={Constants.DISPLAY_TABLE_HEADERS[headerData]}>
                    {Constants.DISPLAY_TABLE_HEADERS[headerData]}
                </th>);
            }
        }
        else {
            return Constants.NO_HEADER_DATA;
        }
        return (<tr>{headers}</tr>);
    }

    render() {
        let headers = this._createTableHeaders(), tableData = this._createTableRows();
        if (headers !== Constants.NO_HEADER_DATA)
            return (
                <table className="table table-responsive">
                    <tBody>
                    {headers}
                    {tableData}
                    </tBody>
                </table>
            );
        return (
            <p>No Data Found.</p>
        );
    }
}
TableComponent.propTypes = {
    headers: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired
};
export default TableComponent;
