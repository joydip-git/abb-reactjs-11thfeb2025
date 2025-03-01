import { JSX, useEffect, useState } from "react"
import { getProduct } from "../../../services/productservice"
import { Product } from "../../../models/product"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const params = useParams()
    const id = params.id

    const [productState, updateProductState] = useState<Product | undefined>()
    const [fetchStatus, updateFetchStatus] = useState<boolean>(false)
    const [errorInfo, updateErrorInfo] = useState<string>('')

    const fetchProductInfo = async (pid: string) => {
        try {
            const response = await getProduct(pid)
            if (response.status == 200) {
                updateProductState(response.data)
                updateFetchStatus(true)
                updateErrorInfo('')
            } else {
                updateProductState(undefined)
                updateFetchStatus(true)
                updateErrorInfo(`issue: ${response.statusText}`)
            }
        } catch (error: any) {
            updateProductState(undefined)
            updateFetchStatus(true)
            updateErrorInfo(`issue: ${error.message}`)
        }
    }

    useEffect(
        () => {
            if (id && id > "0") {
                console.log(`fetching product info for ${1}`);
                fetchProductInfo(id)
            }
        },
        []
    )

    let design: JSX.Element;
    if (!fetchStatus) {
        design = <span>Loading...</span>
    } else if (errorInfo !== '')
        design = <span>{errorInfo}</span>
    else if (!productState)
        design = <span>No record found...</span>
    else
        design = <span><h2>{productState.productName}</h2></span>

    return design
}

export default ProductDetail