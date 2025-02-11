import { Product } from "../models/product"

export type ProductRowPropType = {
    productInfo: Product, //mandatory property
    message?: string //optional property
}
const ProductRow = (args: ProductRowPropType) => {
    return (
        <tr>
            <td>
                <img src={args.productInfo.imageUrl} alt="NA" title={args.productInfo.productName} className="image-style" />
            </td>
            <td>{args.productInfo.productName}</td>
            <td>{args.productInfo.price}</td>
            <td>{args.productInfo.starRating}</td>
        </tr>
    )
}

export default ProductRow