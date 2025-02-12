import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import { Product } from '../../../models/product'
import { useState } from 'react'
import { initialProductRecords } from '../../../repository/productrepository'

function ProductList() {
    const [productState, updateProductState] = useState<Product[]>(initialProductRecords)
    // const [fetchStatus, updateFetchStatus] = useState<boolean>(false)
    // const [errorInfo, updateErrorInfo] = useState<string>('')

    const deleteProductHandler = (id: number) => {
        const copy = [...productState]
        let foundIndex = -1;
        foundIndex = copy.findIndex(p => p.id === id)
        if (foundIndex >= 0) {
            copy.splice(foundIndex, 1)
            console.log(copy);
            updateProductState(copy)
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

    let design: any;
    // if (!fetchStatus)
    //     design = <span>Loading....</span>
    // else if (errorInfo !== '')
    //     design = <span>{errorInfo}</span>
    // else if (productState.length === 0)
    //     design = <span>No records</span>
    // else
    //     design = productTable

    design = productTable

    return design
}

export default ProductList
