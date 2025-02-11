import { Product } from "../../../models/product"

export type ProductRowPropType = {
    productInfo: Product,
    message?: string,
    deleteProduct: (id: number) => void
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
            <td>
                <button type="button" className="btn btn-danger" onClick={
                    () => {
                        args.deleteProduct(args.productInfo.productId)
                    }
                }>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ProductRow