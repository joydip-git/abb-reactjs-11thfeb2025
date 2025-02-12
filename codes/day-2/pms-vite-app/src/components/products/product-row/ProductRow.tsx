import { Product } from "../../../models/product"

export type ProductRowPropType = {
    productInfo: Product,
    message?: string,
    deleteProduct: (id: number) => void
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    // props.productInfo = { id: 1, productCode: '', productName: '', description: '', price: 0, imageUrl: '', starRating: 0, releaseDate: '' }
    return (
        <tr>
            <td>
                <img src={props.productInfo.imageUrl} alt="NA" title={props.productInfo.productName} className="image-style" />
            </td>
            <td>{props.productInfo.productName}</td>
            <td>{props.productInfo.price}</td>
            <td>{props.productInfo.starRating}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={
                    () => {
                        props.deleteProduct(props.productInfo.id)
                    }
                }>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ProductRow