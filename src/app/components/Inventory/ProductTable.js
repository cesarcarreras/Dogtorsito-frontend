import React, { Component } from 'react'
import ProductRow from './ProductRow';
class ProductTable extends Component {
    renderTable = () => {
        var categories = this.getCategories();
        return (
            <div className="productTable">
                <div className="products"><span>Productos:</span></div>
                {categories.map((category) => (
                    <div>
                        <div className="products">
                        <div><span>{category}</span></div>
                        </div>
                        <div>
                            {this.props.productArray.filter(product => product.category===category).map((product,index_product) => (
                                <div>
                                    <ProductRow
                                        key = {index_product}
                                        name={product.name}
                                        price={product.price}
                                        description={product.description}
                                        stocked={product.stock}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    getCategories() {
        var categoryList = [];
        this.props.productArray.forEach(product => {
            if(!categoryList.includes(product.category)) categoryList.push(product.category)
        });
        return categoryList;
    }
    render() {
        return(
            this.renderTable()
        )
    }
}
export default ProductTable;