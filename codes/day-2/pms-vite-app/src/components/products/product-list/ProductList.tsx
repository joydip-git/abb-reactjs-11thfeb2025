import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import { Product } from '../../../models/product'
import { JSX, useState } from 'react'
import { getProducts } from '../../../services/productservice'

function ProductList() {

    const [productState, updateProductState] = useState<Product[]>([])
    const [fetchStatus, updateFetchStatus] = useState<boolean>(false)
    const [errorInfo, updateErrorInfo] = useState<string>('')

    const fetchProducts = async () => {
        try {
            const response = await getProducts()
            if (response.status === 200) {
                updateProductState(response.data)
                updateFetchStatus(true)
                updateErrorInfo('')
            } else {
                updateProductState([])
                updateErrorInfo(`issue: ${response.statusText}`)
                updateFetchStatus(true)
            }
        } catch (error: any) {
            updateProductState([])
            updateErrorInfo(`issue: ${error.message}`)
            updateFetchStatus(true)
        }
    }

    const deleteProductHandler = (id: number) => {
        if (productState.length > 0) {
            const copy = [...productState]
            let foundIndex = -1;
            foundIndex = copy.findIndex(p => p.id === id)
            if (foundIndex >= 0) {
                copy.splice(foundIndex, 1)
                console.log(copy);
                updateProductState(copy)
            }
        }
    }

    const productTable = (
        <>
            <h2>
                List of Products
            </h2>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='table-dark'>
                    {
                        productState
                            .map(
                                (p) => {
                                    const pRow = <ProductRow key={p.id} productInfo={p} deleteProduct={deleteProductHandler} />
                                    console.log(pRow);
                                    return pRow
                                }
                            )
                    }
                </tbody>
            </table>
        </>
    )

    let design: JSX.Element
    if (fetchStatus === false) {
        design = <span>Loading...</span>
    }
    else if (errorInfo !== '') {
        design = <span>{errorInfo}</span>
    }
    else if (!productState || productState.length === 0) {
        design = <span>No records</span>
    }
    else {
        design = productTable
    }

    return design
}

export default ProductList
