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
        let variant = null;
        if (this.state.tableData[0]) {
            let headers = Object.keys(this.state.tableData[0]);
            variant = <TableComponent headers={headers} tableData={this.state.tableData}/>;
        }
        else {
            variant = <p>Data Loading.<br/>Please wait....</p>;
        }
        return (
            <div>
                <div className="jumbotron">
                    <h1>Welcome!</h1>
                </div>
                {variant}
            </div>
        );
    }
}

export default Home;
