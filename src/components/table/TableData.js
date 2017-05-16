import React from "react";
import PropTypes from "prop-types";
import Constants from "./../../constants/constants";

class TableData extends React.Component {
    createTableRows = () => {
        let dataRows = [];
        for (const dataRow of this.props.data) {
            let currRow = [];
            currRow.push(<input type="checkbox" />);
            for (let data in dataRow) {
                if (Constants.DISPLAY_TABLE_HEADERS.includes(data)) {
                    data === 'avatar_url' ?
                        currRow.push(<td><img src={JSON.stringify(dataRow[data])}/></td>) :
                        currRow.push(<td key={dataRow[data]}>{JSON.stringify(dataRow[data])}</td>);
                }
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