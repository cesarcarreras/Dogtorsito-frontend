import {Form, Button, Table} from "react-bootstrap";
import {useState, createRef, useEffect} from 'react';
import {inventoryCreateEndpoint, inventoryListEndpoint} from '../../services/inventory-ws'

export default function AddProduct() {
    let initialValue = [];
    const [products, setProduct] = useState(initialValue)
    const formData = createRef()
    //addproduct
    const add = (event) =>{
        event.preventDefault();
       const newProduct = {
             productName: formData.current.productName.value,
             price: formData.current.price.value,
             cuantos: Number(formData.current.cuantos.value),
             category: 1
         }

        inventoryCreateEndpoint(newProduct)
        .then(res => {
            setProduct([...products,newProduct])
        })
        .catch(error => {
            console.log(error.response)
        })
        console.log(newProduct)
    }

    useEffect(()=>{
        inventoryListEndpoint()
        .then(res => {
            setProduct(res.data.result)
        })
        .catch(error => {
            console.log(error.response)
        })
    },[])

    return(
        <div>
            <h1 className="title-inventory" align-items="center">Inventario</h1>
            <Form onSubmit = {add} ref={formData}>
                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Nombre del producto:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del producto" name = "productName"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Precio: </Form.Label>
                    <Form.Control type="number" placeholder="Precio del producto" name = "price"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Cantidad: </Form.Label>
                    <Form.Control type="number" placeholder="Cantidad" name = "cuantos"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add to Inventory
                </Button>
            </Form>
            <br/>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item,index)=>{
                        return (
                            <tr key = {index}>
                                <td>{index+1}</td>
                                <td>{item.productName}</td>
                                <td>${item.price}</td>
                                <td>{item.stock}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
        </div>
    )
}