'use strict';
import React from "react";
import ProductActions from "./../../actions/product-actions";
import ProductStore from "../../stores/product-store";
import TableComponent from "./../table/TableComponent";
class Home extends React.Component {
    constructor() {
        super();
        // this.state = {json: ProductActions.getAllProducts(), date: new Date()};
        this.timerId;
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._getProductData);
    }

    componentWillMount() {
        ProductStore.addChangeListener(this._getProductData);
        this.setState({json: ProductActions.getAllProducts});
        // console.log('json :: ' + this.state.json);
    }

    _getProductData() {
        this.setState({json: JSON.stringify(ProductActions.getAllProducts())});
    }

    render() {
        console.log('json' + this.state.json);
        return (
            <div>
                <div className="jumbotron">
                    <h1>Welcome!</h1>
                </div>
                <TableComponent headers={[1, 2, 3]} tableData={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}/>
                {/*<p>{this.state.json}</p>*/}
            </div>
        )
            ;
    }
}

export default Home;
