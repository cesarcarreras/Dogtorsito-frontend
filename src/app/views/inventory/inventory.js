import React, {Component} from 'react'
import './inventory.css'
import FilterableProductTable from '../../components/Inventory/FilterableProductTable'

class Inventory extends Component{
    render(){
        return(
            <div className="filter">
                <FilterableProductTable/>
            </div>
        )
    }
}

export default Inventory