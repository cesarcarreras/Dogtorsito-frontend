import React, {Component} from 'react'
import FilterableProductTable from '../../components/Inventory/FilterableProductTable'

class Inventory extends Component{
    render(){
        return(
            <div>
                <FilterableProductTable/>
            </div>
        )
    }
}

export default Inventory