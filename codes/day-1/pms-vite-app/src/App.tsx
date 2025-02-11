import ProductList from "./product-list/ProductList";

export function App() {
  const productListElement = ProductList()
  return (
    <div>
      {productListElement}
    </div>
  )
}