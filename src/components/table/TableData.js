import React from "react";
import PropTypes from "prop-types";
class TableData extends React.Component {
    createTableRows = () => {
        let dataRows = [];
        for (const dataRow of this.props.data) {
            let currRow = [];
            currRow.push(<input type="checkbox" /> );
            for (let data of dataRow) {
                currRow.push(<td>{JSON.stringify(data)}</td>);
            }
            dataRows.push(<tr>{currRow}</tr>);
        }
        return dataRows;
    }

    render() {
        let data = this.createTableRows();
        // console.log('TableData ::' + data);
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