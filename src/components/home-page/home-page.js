'use strict';
import React from "react";
import ProductActions from "./../../actions/product-actions";
import ProductStore from "../../stores/product-store";
import TableComponent from "./../table/TableComponent";
import GithubUsersAction from "./../../actions/github-users-action";
import GithubUsersStore from "./../../stores/github-users-store";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {tableData: []};
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._getProductData);
        GithubUsersStore.removeChangeListener(this._getUserData)
    }

    componentWillMount() {
        ProductStore.addChangeListener(this._getProductData);
        GithubUsersStore.addChangeListener(this._getUserData);
    }

    componentDidMount() {
        GithubUsersAction.getAllUsers();
    }

    _getUserData = () => {
        this.setState({tableData: GithubUsersStore._getUsers()});
    }

    _getProductData() {
        this.setState({json: JSON.stringify(ProductActions.getAllProducts())});
    }

    render() {
        let body = null;
        if (this.state.tableData[0]) {
            let headers = Object.keys(this.state.tableData[0]);
            body =
                <div>
                    <div className="jumbotron">
                        <h1>Welcome!</h1>
                    </div>
                    <TableComponent headers={headers} tableData={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}/>
                </div>;
        }
        return <div>
            {body}
        </div>
    }
}

export default Home;
