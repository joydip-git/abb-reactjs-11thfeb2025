import { Link } from "react-router-dom"
import { Product } from "../../../models/product"

export type ProductRowPropType = {
    productInfo: Product,
    message?: string,
    deleteProductHandler: (id: string) => void
}
const ProductRow = (props: Readonly<ProductRowPropType>) => {
    return (
        <tr>
            <td>
                <Link to={`/products/view/${props.productInfo.id}`}>
                    <img src={props.productInfo.imageUrl} alt="NA" title={props.productInfo.productName} className="image-style" />
                </Link>
            </td>
            <td>{props.productInfo.productName}</td>
            <td>{props.productInfo.price}</td>
            <td>{props.productInfo.starRating}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={
                    () => {
                        props.deleteProductHandler(props.productInfo.id)
                    }
                }>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ProductRow