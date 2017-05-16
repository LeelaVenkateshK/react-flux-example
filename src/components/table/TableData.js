import React from "react";
import PropTypes from "prop-types";
class TableData extends React.Component {
    createTableRows = () => {
        let dataRows = [];
        for (const dataRow of this.props.data) {
            let currRow = [];
            currRow.push(<input type="checkbox"/>);
            for (let data in dataRow) {
                currRow.push(<td>{JSON.stringify(dataRow[data])}</td>);
            }
            dataRows.push(<tr>{currRow}</tr>);
        }
        return dataRows;
    }

    render() {
        let data = this.createTableRows();
        return (
            <tBody>
            {data}
            </tBody>
        );
    }
}
TableData.propTypes = {
    data: PropTypes.array.isRequired
};
export default TableData;