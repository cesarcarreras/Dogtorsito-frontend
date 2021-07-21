import React, { Component } from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import {inventoryListEndpoint} from '../../services/inventory';
class FilterableProductTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            filteredArr: []
        }
    }
    componentDidMount(){
        inventoryListEndpoint()
        .then(data => {
            this.setState({
                filteredArr: data.data.result
            })
        })
        .catch(error => console.log("error",error))
    }
    onChange(field, value) {
        // parent class change handler is always called with field name and value
        this.setState({filteredArr: this.state.filteredArr.filter(product => (product.name).toLowerCase().includes(value.toLowerCase()))});
        console.log(this.state.filteredArr);
    }
    render () {
        console.log("state",this.state.filteredArr)
        return (
            <div className='productFilter'>
                <SearchBar
                    onChange={this.onChange.bind(this)}
                />
                <ProductTable
                    productArray = {this.state.filteredArr}
                />
            </div>
        )
    }
}
export default FilterableProductTable;