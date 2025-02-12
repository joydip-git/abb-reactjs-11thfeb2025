import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import { Product } from '../../../models/product'
import { JSX, useEffect, useState } from 'react'
import { deleteProduct, getProducts } from '../../../services/productservice'
import ProductDetail from '../product-detail/ProductDetail'

function ProductList() {

    const [productState, updateProductState] = useState<Product[]>([])
    const [fetchStatus, updateFetchStatus] = useState<boolean>(false)
    const [errorInfo, updateErrorInfo] = useState<string>('')
    const [selectedId, setSelectedId] = useState<string>("0")

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

    useEffect(
        () => {
            console.log('sending request...')
            fetchProducts()
        },
        []
    )

    // useEffect(
    //     () => {
    //         console.log('this will be executed everytime');
    //     }
    // )

    const removeProduct = async (id: string) => {
        try {
            const response = await deleteProduct(id)
            if (response.status === 200) {
                //fetch fresh records from backend
                fetchProducts()

                //or update the locally present data by removing the same product from the local copy
                // if (productState.length > 0) {
                //     const copy = [...productState]
                //     let foundIndex = -1;
                //     foundIndex = copy.findIndex(p => p.id === id)
                //     if (foundIndex >= 0) {
                //         copy.splice(foundIndex, 1)
                //         console.log(copy);
                //         updateProductState(copy)
                //     }
                // }
            } else {
                updateErrorInfo(`issue: ${response.statusText}`)
            }
        } catch (error: any) {
            updateErrorInfo(`issue: ${error.message}`)
        }
    }
    const deleteProductHandler = (id: string) => {
        removeProduct(id)
    }

    const selectProductHandler = (id: string) => {
        // window.alert(`selected product id:${id}`)
        setSelectedId(id)
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
                                    const pRow = <ProductRow key={p.id} productInfo={p} deleteProductHandler={deleteProductHandler} selectProductHandler={selectProductHandler} />
                                    //console.log(pRow);
                                    return pRow
                                }
                            )
                    }
                </tbody>
            </table>
            <br />
            {
                selectedId > "0" ? <ProductDetail productId={selectedId} /> : <span>Select a product to view detail</span>
            }
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

    console.log('returning the element')
    return design
}

export default ProductList
