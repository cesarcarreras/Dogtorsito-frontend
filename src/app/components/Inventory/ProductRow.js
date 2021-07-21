
import React from 'react';
const ProductRow = ({name,price,stock,productName}) => (
    <div className="product">
        <span>{name} </span><span>{price}</span><span>{stock}</span><span>{productName}</span>
    </div>
)
export default ProductRow;